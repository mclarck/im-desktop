import React from "react";
import Timeline, { TimelineItem } from "../../../../core/components/timeline";
import style from "./style.module.scss";
import useOperations from "./useOperations";
import moment from "moment";
import { Loader } from "../../../../core/components";
import Order from "../../../../core/components/order/Order";
import Calculator from "../../../../core/lib/calculator";
import Billing from "../../../../core/components/billing/Billing";
import Map from "../../../../core/components/map";
import { FaPrint, FaRegTrashAlt } from "react-icons/fa";
import { MdDirectionsBike, MdRemoveShoppingCart } from "react-icons/md";

export default function Operations(props: any) {
  const { setPreview, preview, operations, loading } = useOperations(props);

  return (
    <div className={style.operations}>
      <div className={style.timeline}>
        <Timeline> 
          {operations?.map((o: any, idx: any) => {
            const { street, apt } = o?.node?.client?.address;
            const { username, phone } = o?.node?.client;
            const orders = o?.node?.orders?.edges?.map((e: any) => e.node);
            const calc = new Calculator(orders);
            return (
              <TimelineItem
                key={idx}
                status={o?.node.status}
                title={`${street}, ${apt}`}
                subtitle={`${username}, ${phone}`}
                date={moment(o?.node?.created).calendar()}
              >
                <div className={style.cart}>
                  <div>
                    <div className={style.orders}>
                      {orders?.map((order: any, index: any) => {
                        return <Order key={index} order={order} />;
                      })}
                    </div>
                    <div className={style.bill}>
                      <Billing bills={calc.bills()} />
                    </div>
                  </div>
                  <Map style={style} address={o?.node?.client?.address} />
                  <div className={style.actions}>
                    <button className={style.action}>
                      <MdDirectionsBike />
                    </button>
                    <button className={style.action}>
                      <FaPrint />
                    </button>
                    <button className={style.action}>
                      <MdRemoveShoppingCart />
                    </button>
                    <button className={style.action}>
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </div>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
      {loading && <Loader />}
    </div>
  );
}

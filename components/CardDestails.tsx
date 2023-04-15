import style from "@styles/details.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/slice/speakerSlice";
import { motion } from "framer-motion"

interface Props {
  product: TProduct;
}

export default function CardDestails({ product }: Props) {
  const dispatch = useDispatch();
  const { _id, name, price, image, amount, attributes } = product;

  const handleAddToCart = (product: TProduct) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div key={_id} className={style.containerCard}>
        <div className={style.card}>
          <div className={style.containerImg}>
            <motion.img
              src={image}
              height={300}
              width={300}
              alt={`speaker ${name}`}
              className={style.img}
              layoutId={name}
            />
          </div>
          <div className={style.addCartContainer}>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <div className={style.addCart}>
              <button
                onClick={() => handleAddToCart(product)}
                className={style.btn}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className={style.description}>
          <h4>Description</h4>
          <p className={style.p}>{attributes.description}</p>
        </div>
        <table className={style.table}>
          <thead className={style.thead}>
            <tr>
              <th className={style.th}>Sheet</th>
              <th className={style.th2}>Data</th>
            </tr>
          </thead>
          <tbody className={style.tbody}>
            <tr className={style.tr}>
              <td className={style.td}>Speaker Type</td>
              <td className={style.td}>{attributes.SpeakerType}</td>
            </tr>
            <tr className={style.tr}>
              <td className={style.td}>Battery</td>
              <td className={style.td}>{attributes.Battery}</td>
            </tr>
            <tr className={style.tr}>
              <td className={style.td}>Battery Life </td>
              <td className={style.td}>{attributes.BatteryLife}</td>
            </tr>
            <tr className={style.tr}>
              <td className={style.td}>Dimensions</td>
              <td className={style.td}>{attributes.Dimensions}</td>
            </tr>
            <tr className={style.tr}>
              <td className={style.td}>Frequency Response</td>
              <td className={style.td}>
                {attributes.FrequencyResponse}
              </td>
            </tr>
            <tr className={style.tr}>
              <td className={style.td}>OutputPower</td>
              <td className={style.td}>{attributes.OutputPower}</td>
            </tr>
            <tr className={style.tr}>
              <td className={style.td}>Sensitivity</td>
              <td className={style.td}>{attributes.Sensitivity}</td>
            </tr>
            <tr className={style.tr}>
              <td className={style.td}>Type Of Connector</td>
              <td className={style.td}>{attributes.TypeOfConnector}</td>
            </tr>
            <tr className={style.tr}>
              <td className={style.td}>Weight</td>
              <td className={style.td}>{attributes.Weight}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

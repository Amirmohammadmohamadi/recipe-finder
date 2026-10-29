import styles from "./ingredientCard.module.scss";

interface PropType {
    measure: string;
    material: string;
    img: string;
};

const IngredientCard = ({measure , material ,img}:PropType) => {
    return <div className={styles.ingredientCardWrapper}>
        <img src={img} alt={`${material}-img`} />
        <div className={styles.title}>
            <span>{measure}</span>
            <p>{material}</p>
        </div>
    </div>
};

export default IngredientCard;
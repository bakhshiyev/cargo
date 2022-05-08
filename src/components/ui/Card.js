const Card = (props) => {
    return (
        <div className={`bg-white rounded shadow-xl p-4 ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Card;
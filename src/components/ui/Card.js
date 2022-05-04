const Card = (props) => {
    return (
        <div className="bg-white rounded text-black p-4">
            {props.children}
        </div>
    );
};

export default Card;
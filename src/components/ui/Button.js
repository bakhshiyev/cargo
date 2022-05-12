const Button = (props) => {
    return (
        <button className="bg-[#351dab] text-white w-1/2 m-auto rounded p-2 text-center font-semibold">
            {props.children}
        </button>
    );
};

export default Button;
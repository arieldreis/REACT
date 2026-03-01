const BotoesControle = (props) => {
    return <div className="caixa-botoes">
        <button>
            <i className={"bi bi-skip-start-btn-fill"}></i>
        </button>
        <button>
            <i className={"bi bi-arrow-counterclockwise"}></i>
        </button>
        <button>
            <i className={`bi bi-${props.taTocando ? "pause" : "play"}-circle-fill`}></i>
        </button>
        <button>
            <i className={"bi bi-arrow-clockwise"}></i>
        </button>
        <button>
            <i className={"bi bi-skip-end-btn-fill"}></i>
        </button>
    </div>
};

export default BotoesControle;
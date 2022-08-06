import Alert from "~/myAlert"

export default function Button() {
    return <button
        onClick={() => Alert()}>
        Click me
    </button>
}
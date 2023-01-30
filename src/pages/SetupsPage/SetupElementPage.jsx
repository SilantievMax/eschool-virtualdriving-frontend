import { useParams } from "react-router-dom"

export const SetupElementPage = () => {
	let params = useParams()

	return (<div>{params.id}</div>)
}
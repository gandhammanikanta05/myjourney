import { EachClgDiv, ClgId, ClgName, ClgBranch, DeleteOpt } from "./styledComponents"

const College = props => {
    const {clgdetails, onClickDlt} = props
    const {id, clgname, branch} = clgdetails
    
    const onClickDelete = async () => {
        const url = 'http://localhost:5001/Home'
        const options = {
          method: 'DELETE',
          body: JSON.stringify(clgdetails),
          headers: {'Content-Type':'application/json'},
        }
        const response = await fetch(url, options)
        console.log(response)
        onClickDlt(id)
        console.log("called")
    }
    return(
        <EachClgDiv>
            <ClgId>{id}</ClgId>
            <ClgName>{clgname}</ClgName>
            <ClgBranch>{branch}</ClgBranch>
            <DeleteOpt onClick={onClickDelete}>Delete</DeleteOpt>
        </EachClgDiv>
    )
}

export default College
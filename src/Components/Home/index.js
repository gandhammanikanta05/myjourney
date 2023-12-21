import { Component } from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import College from '../College'
import { HomeContainer, HomeHeading, UniversityForm, UniversityTitle, TitleInput, BranchTitle, SelectSection, Options, AddBtn, CollegesContainer } from './styledComponents'
class Home extends Component {
    state = {
        clgName: '',
        branch: '',
        collegesList: [],
        submitted: false,
        count: '',
        deleted: false,
    }

    enterClgName = event => {
        this.setState({clgName: event.target.value})
    }

    selectBranch = event => {
        this.setState({branch: event.target.value})
    }

    submitDetails = async() => {
        const {count, clgName, branch} = this.state
        console.log(count)
        const collegeDetails = {count, clgName, branch}
        const url = 'http://localhost:5001/Home'
        const options = {
          method: 'POST',
          body: JSON.stringify(collegeDetails),
          headers: {'Content-Type':'application/json'},
        }
        const response = await fetch(url, options)
        // const data = await response.json()
        this.getColleges()
    }

    componentDidMount() {
        this.getColleges()
    }

    getColleges = async () => {
        const jwtToken = Cookies.get('jwt_token')
        const url = 'http://localhost:5001/Home'
        const options = {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
            method: 'GET',
          }
        const response = await fetch(url, options)
        const data = await response.json()
        const len = data.length
        this.setState({collegesList: data, count: len+1})
    }

    onClickupdateCount = (id) => {
        this.setState({deleted: true})
        this.getColleges()
        console.log("item deleted")
    }

    
render(){
    const {collegesList} = this.state
    return(
        <HomeContainer>
            <Header />
            <HomeHeading>Add Your Desired University</HomeHeading>
            <UniversityForm>
                <UniversityTitle htmlFor="title">Enter University Name</UniversityTitle>
                <TitleInput id="title" placeholder="University Name" onChange={this.enterClgName} />
                <BranchTitle htmlFor="branches">Specialization</BranchTitle>
                <SelectSection id="branches" onChange={this.selectBranch}>
                    <Options value="Computer Science">Computer Science</Options>
                    <Options value="Computer Engineering">Computer Engineering</Options>
                    <Options value="Management in Information Systems">Management in Information Systems</Options>
                    <Options value="Data Science">Data Science</Options>
                    <Options value="Cybersecurity and Information Assurance">Cybersecurity and Information Assurance</Options>
                </SelectSection>
                <AddBtn type="button" onClick={this.submitDetails}>ADD</AddBtn>
            </UniversityForm>
            <CollegesContainer>{collegesList.map(eachClg => (
                <College key={eachClg.id} clgdetails={eachClg} onClickDlt={this.onClickupdateCount} />
            ))}</CollegesContainer>
        </HomeContainer>
    )}
}

export default Home
import { HeaderContainer, LogoName, OptionsSection, MyUniversity, LogoutBtn } from "./styledComponents"

const Header = () => {
    return(
        <HeaderContainer>
            <LogoName>MY JOURNEY</LogoName>
            <OptionsSection>
                <MyUniversity>My Universities</MyUniversity>
                <LogoutBtn type="button">Logout</LogoutBtn>
            </OptionsSection>
        </HeaderContainer>
    )
}

export default Header
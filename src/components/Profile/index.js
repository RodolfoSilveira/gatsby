import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"
import * as S from "./styles"
import getThemeColor from "../../utils/getThemeColor"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, description, position },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          position
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/" cover direction="left" bg={getThemeColor()}  duration={0.6}>
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile

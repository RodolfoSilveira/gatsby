import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './styles'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "images.jpeg" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar;

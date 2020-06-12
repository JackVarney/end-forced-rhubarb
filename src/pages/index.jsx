import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Quote = styled.blockquote`
  margin: 0 0 4.8rem 0;
  padding: ${props => props.padding};

  color: #fafafa;
  background-color: #212121;

  @media (min-width: 767px) {
    padding-left: 30%;
    padding-right: 30%;
  }
`

const QuoteContent = styled.span`
  display: block;

  padding: ${props => props.padding};
  margin: 0 3.2rem;
  ${props =>
    props.border &&
    `
    border: solid #009688;
    border-width: 1px 0;
  `};

  quotes: "“" "”";
  text-align: ${props => props.textAlign || "center"};

  &:before {
    margin: 0 2px 0 0;

    font-weight: 700;
    content: open-quote;
  }

  &:after {
    margin: 0 0 0 2px;

    font-weight: 700;
    content: close-quote;
  }
`

const Emphasis = styled.em`
  color: #263238;
  background-image: linear-gradient(
    100deg,
    transparent 0%,
    transparent 5%,
    #e0f2f1 5%,
    #e0f2f1 95%,
    transparent 95%
  );
`

const Title = styled.h2`
  color: #212121;
  font-size: 3.2rem;
  margin: 0 1.6rem 1.6rem;
  ${props => props.inverse && "color: #fafafa;"}
`

const Content = styled.p`
  color: #212121;
  line-height: 2.5rem;
  margin: 0 1.6rem 1.6rem;
`

const Hero = styled.section`
  margin: 0 0 3.2rem 0;
`

const HeroQuoteFooter = styled.footer`
  padding: 1.6rem 0.8rem 0;
  margin: 0.8rem;
  text-align: center;
  border-top: 2px solid #009688;
`

const HeroQuoteLink = styled.a`
  font-size: 1.6rem;
  font-style: normal;

  color: #fafafa;
  text-decoration: none;
`

const HeroQuoteLinkArrow = styled.div`
  display: inline-block;
  transform: rotate(-45deg);

  border: solid #fafafa;
  border-width: 0 3px 3px 0;
  padding: 3px;
  margin: 0 0 1px 4px;
`

const HeroWrapper = styled.div`
  @media (min-width: 767px) {
    width: 51.2rem;
    margin: 0 auto;
  }
`

const HeroHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 0 3.2rem 0;
`

const HeroFigure = styled.figure`
  max-width: 100%;
  margin: 0 1.6rem;

  @media (min-width: 425px) {
    width: 388px;
  }
`

const HeroFigureCaption = styled.figcaption`
  border: solid #212121;
  border-width: 0 0 2px 0;
  padding: 0.4rem 0.8rem 0.8rem;

  color: #212121;
  font-size: 1.2rem;
`

const HeroFigureCaptionLink = styled.a`
  color: #004d40;
`

const SoundSection = styled.section`
  padding: 0 0 3.6rem 0;

  @media (min-width: 767px) {
    width: 51.2rem;
    margin: 0 auto;
  }
`

// By Peter Ashton from Aylesbury, England - Terracotta Army on Flickr, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=4947201
const Planter = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "planters.jpg" }) {
        childImageSharp {
          fixed(width: 388, height: 340) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      style={{ maxWidth: "388px", width: "100%" }}
      fixed={data.placeholderImage.childImageSharp.fixed}
    />
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <Quote padding="0 1.6rem 4.8rem">
        <QuoteContent padding="0 0 0.8rem 0">
          Once deprived of light, the vegetable is forced to use the energy
          stored in its roots, making it far sweeter than the normal variety
        </QuoteContent>
        <HeroQuoteFooter>
          <cite>
            <HeroQuoteLink
              target="_blank"
              href="http://www.bbc.com/travel/story/20190424-the-english-vegetable-picked-by-candlelight"
            >
              -Mike MacEacheran, BBC Travel
              <HeroQuoteLinkArrow />
            </HeroQuoteLink>
          </cite>
        </HeroQuoteFooter>
      </Quote>

      <HeroWrapper>
        <HeroHeader>
          <Title>Together, we can improve rhubarb welfare.</Title>
          <Content>
            Every day<Emphasis> thousands </Emphasis>of rhubarb plants are
            subject to freezing cold, pitch black environments.
          </Content>
        </HeroHeader>

        <HeroFigure>
          <Planter />

          <HeroFigureCaption>
            Rhubarb plants imprisoned in terracotta "forcers".{" "}
            <HeroFigureCaptionLink href="https://commons.wikimedia.org/w/index.php?curid=4947201">
              Photo bravely provided by Peter Ashton.
            </HeroFigureCaptionLink>
          </HeroFigureCaption>
        </HeroFigure>
      </HeroWrapper>
    </Hero>

    <Quote
      padding="25.6rem 1.6rem"
      cite="http://www.bbc.com/travel/story/20190424-the-english-vegetable-picked-by-candlelight"
    >
      <QuoteContent border padding="3.2rem 0">
        The vegetable was growing so fast, the air seemed to ripple with
        applause
      </QuoteContent>
    </Quote>

    <SoundSection>
      <Title>The sound of captivity</Title>
      <Content>
        Once valued so highly for its medicinal qualities. Cheap sugar found
        another use for this miraculous vegetable.
      </Content>
      <Content>
        In 1877, this increased appetite let the people of West Yorkshire to
        start forcing rhubarb in mass quantities.
      </Content>
      <Content>
        At the peak of this brutality, there were 200 of these enterprises,
        moving rhubarb from Leeds to London.
      </Content>
      <Content>
        <Emphasis>Today, 11 still exist.</Emphasis>
      </Content>
    </SoundSection>
  </Layout>
)

export default IndexPage

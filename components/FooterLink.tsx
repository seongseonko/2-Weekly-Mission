import React from "react";
import image1 from "@/public/facebook.svg";
import image2 from "@/public/instagram.svg";
import image3 from "@/public/twitter.svg";
import image4 from "@/public/youtube.svg";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const FooterLinkContainer = styled.div`
  a {
    padding-left: 12px;
  }
`;

const ImageData = [
  {
    url: image1,
    link: "https://www.facebook.com",
    alt: "페이스북 로고",
  },
  {
    url: image2,
    link: "https://www.instagram.com",
    alt: "인스타그램 로고",
  },
  {
    url: image3,
    link: "https://www.twitter.com",
    alt: "트위터 로고",
  },
  {
    url: image4,
    link: "https://www.youtube.com",
    alt: "유튜브 로고",
  },
];

function FooterLink() {
  return (
    <FooterLinkContainer>
      {ImageData.map((image) => (
        <Link href={image.link} key={image.alt} target="_blank">
          <Image src={image.url} alt={image.alt} width={20} height={20} />
        </Link>
      ))}
    </FooterLinkContainer>
  );
}
export default FooterLink;

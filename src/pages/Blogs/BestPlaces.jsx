import React from "react";
import styled from "styled-components";
import Blogs from "../../components/Blogs";

const Wrapper = styled.section`
display: flex;
justify-content:center;

text-align:cenetr;

@media(max-width:820px){
  .line{
    display:none;
  }
}
`
const Container = styled.div`
width:80%;
@media(max-width:666px){
  width:94%;
}
`
const Heading = styled.p`
display: flex;
color: black;
font-weight: 700;
padding: 0rem 3rem;
font-size: 2.3rem;
margin: 0;
padding: 1.5rem 0rem;
@media(max-width:666px){
  font-size: 1.7rem;
}
`
const Image = styled.img`
width:40rem;
border-radius:20px;
@media(max-width:666px){
  width:100%;
}
`
const Content = styled.p`
width:90%;
text-align:justify;
@media(max-width:820px){
  width:95%;
}
@media(max-width:666px){
  width:100%;
}
`

const BestPlaces = () => {
  return (
    <>
    <Wrapper>
        <Container>
          <div style={{display:"flex" , justifyContent:'center'}}>
            <Heading>Best Places To Buy</Heading>
            </div>
            <div style={{display:"flex" , justifyContent:'center'}}>
            <Image src="https://res.cloudinary.com/dyqynjew8/image/upload/v1697222489/architecture-1868667_1920_nsafjo.jpg" alt="img" />
            </div>
            <div style={{display:"flex" , justifyContent:'center'}}>
            <Content>
            <p>Investing in a residential plot has always been a preferred choice for many due to its potential for appreciating value and low risk. Gurgaon, now Gurugram, in the National Capital Region (NCR) of India, offers a plethora of opportunities for such investments. This blog explores some of the best places to buy residential plots in Gurgaon, considering factors like location, connectivity, and infrastructure development.</p>

<p>New Gurgaon New Gurgaon, located between Delhi and Manesar, is a burgeoning locality that comprises Sectors 76-95. Its prime location adjoining National Highway (NH) 48 and proximity to Dwarka Expressway and KMP (Kundli &ndash; Manesar &ndash; Palwal) Expressway make it an attractive investment option.</p>

<p>Why Consider New Gurgaon: Connectivity: New Gurgaon enjoys excellent connectivity, with the proposed metro extension from Delhi to Alwar expected to further enhance commutation. Infrastructure: Robust civic infrastructure development is underway, promising a well-planned living environment. Golf Course Road Golf Course Road is synonymous with luxury living in Gurgaon. This premium residential locality is adjacent to corporate hubs like Cyber City, Suncity Business Park, and Time Tower.</p>

<p>Why Consider Golf Course Road: Luxury Living: Golf Course Road is home to some of the most upscale residential properties in Gurgaon, making it ideal for those seeking a lavish lifestyle. Greenery: Residents enjoy well-maintained parks and green belts, creating a serene environment amidst the bustling city. Connectivity: Seamless connectivity via Rapid Metro and NH-48, as well as proximity to the Indira Gandhi International (IGI) Airport, are major advantages. Investment Potential: Property prices in this area have surged, making it suitable for investors looking for long-term gains. Golf Course Extension Road Golf Course Extension Road, stretching from Sector 58 to Sector 69, offers a well-connected yet peaceful lifestyle. Several corporate parks and multinational companies (MNCs) have led to a multitude of residential projects here.</p>

<p>Why Consider Golf Course Extension Road: Development: The area features a mix of apartments, builder floor units, and plotted developments, providing diverse housing options. Dwarka Expressway Dwarka Expressway serves as the link between Delhi and Gurgaon, offering proximity to the IGI Airport and planned developments of residential, commercial, and retail zones.</p>

<p>Why Consider Dwarka Expressway: Connectivity: Sectors along Dwarka Expressway are just 20 minutes from Udyog Vihar and Cyber City, major corporate hubs of Gurgaon. Livability: Sectors 99, 102, 103, 105, and Rajendra Park are considered the most livable areas along Dwarka Expressway, offering evolving infrastructure and amenities. Investment Potential: Dwarka Expressway has seen over 40 percent YoY increases in land values, with residential plot sizes ranging from 122 sq yards to 1,200 sq yards. Southern Peripheral Road (SPR) SPR is a rapidly developing residential plot known for its investment potential. Land values in the area have witnessed substantial growth.</p>

<p>Why Consider Southern Peripheral Road: Connectivity: The area enjoys proximity to Gurugram-Faridabad Road, Golf Course Extension Road, NH-48, and Dwarka Expressway, enhancing accessibility. Infrastructure: Prominent office hubs like Cyber City and Udyog Vihar are close by, making it an attractive location for professionals. Sohna Road Sohna Road, currently being expanded to a six-lane National Highway, offers proximity to office complexes and employment hubs.</p>

<p>Why Consider Sohna Road: Connectivity: It enjoys excellent connectivity to NH-8, Golf Course Extension Road, Old Gurgaon, and Huda City Centre. Social Infrastructure: The area features sound social infrastructure and access to essential amenities. In addition to these emerging residential zones, areas like Garhi Harsaru, Farukh Nagar, and Saraswati Enclave have also gained popularity among homebuyers and investors due to their strategic location and relatively lower land prices.</p>

<p>When considering an investment in residential plot in Gurgaon, it's essential to assess your budget, long-term goals, and lifestyle preferences. Conduct thorough research, seek advice from experts of residential plots in Gurgaon, and visit the sites personally to make an informed decision that aligns with your objectives. Gurgaon's dynamic real estate market offers ample opportunities for growth and investment, making it an enticing destination for property buyers and investors alike.</p>
            </Content>
      </div>
        </Container>
        <img className="line" alt="img" style={{width:'10rem'}} src="https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2t8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
    </Wrapper>
    <Blogs />
    </>
  );
};

export default BestPlaces;

import React from "react";
import { Poltexnikum } from "../../assets/img/img";
import { Title } from "../yonalishlar/yonalishlar";
import styled from "styled-components";

export const Text = styled("p")`
  font-family: Manrope;
  font-weight: 500;
  font-size: 22px;
  line-height: 150%;
  letter-spacing: 0%;
  color: #454545;
`;
export default function Texnikum() {
  return (
    <div>
      <div className="container">
        <div className="mt-[30px] flex flex-col gap-[70px]">
          <img src={Poltexnikum} alt="" />
          <div className="flex flex-col gap-[20px]">
            <Title>Politexnikum Tarixi</Title>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo voluptates laboriosam odio quod, officiis sunt ut
              provident. Exercitationem molestias debitis adipisci hic facilis
              dolorem repudiandae cupiditate molestiae ex, vel nostrum.
              Dignissimos quasi nemo deserunt, animi quibusdam reiciendis
              repellendus eveniet rerum vitae culpa, aut qui atque, doloremque
              accusamus? Veniam in officiis nam? Fuga dolorem obcaecati deleniti
              quidem itaque consequatur dolores dolorum? Ducimus a ipsum
              blanditiis, voluptates sapiente iste molestias natus magni.
              <br />
              <br />
              In. Totam officiis distinctio quo illo? Mollitia cumque blanditiis
              animi soluta, itaque dolores rerum doloribus aliquam dolore cum.
              Ea mollitia, a quia distinctio, eos ut quae, praesentium unde
              eligendi exercitationem at? Neque, dignissimos! Numquam similique
              voluptatum vero laborum dolorum nisi. Cupiditate cum qui ea
              ducimus voluptatibus! Asperiores sit, consequatur voluptatum, sed
              dolores illo soluta laboriosam tempora debitis molestias hic neque
              quae doloribus mollitia voluptatibus sunt. Quidem hic et veniam
              quibusdam similique asperiores corporis at ipsa. Dolor, autem
              numquam repellat voluptatibus explicabo perferendis nemo quo
              assumenda reiciendis dolores recusandae mollitia! Eveniet
              doloribus adipisci nisi dolorum hic, dolores beatae consectetur
              laudantium quidem quo architecto ducimus, iusto sapiente? Fuga
              fugiat qui incidunt, ex nulla quasi deleniti excepturi a aliquid
              quas tenetur dignissimos eveniet deserunt quos sit ab culpa.
              <br />
              <br />
              Temporibus voluptas dolore architecto vero similique tempore
              molestias odit eum. Aut obcaecati facilis reiciendis iusto, eos
              libero, iure ullam quidem necessitatibus veritatis tempore
              corrupti molestias at eveniet nisi? Saepe optio quibusdam deserunt
              ipsum harum aliquam non dolores nemo placeat cumque! Doloribus
              alias ut possimus nihil, nostrum recusandae commodi illum, enim
              consequatur repellat, exercitationem deleniti molestiae architecto
              corporis sequi ad pariatur, quasi animi ab enim. Commodi
              temporibus vel incidunt nemo eligendi esse ab tenetur, excepturi
              minus recusandae, nesciunt ad, natus corporis quibusdam quia quo
              consequuntur deleniti dolorum vero. Sit ex molestiae officiis
              consequatur ea cupiditate! Voluptatem neque, fugit aut beatae
              ducimus sapiente ullam non dolorum tempora deserunt porro nulla
              sint debitis sunt. Illo, temporibus.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

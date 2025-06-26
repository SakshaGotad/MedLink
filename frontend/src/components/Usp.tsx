import Image from "next/image";
import React from "react";

export default function Usp() {
  return (
    <>
      <section>
        <div>
          <div>
            <Image src='/image.png' width={100} height={100} alt="research"/>
            <div></div>
          </div>
          <div>
            <h1>Why we are better ?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              suscipit recusandae, ipsum, facere nostrum amet assumenda maxime
              iure, facilis adipisci quam quidem minus corporis neque est
              consequuntur modi! Ut, aliquid
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

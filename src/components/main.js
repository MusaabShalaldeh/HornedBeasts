import React from "react";
import HornedBeast from "./HornedBeasts";
import Data from "../assets/data.json";

class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          {
            Data.map((item) => {
              return (
                <HornedBeast
                  title={item.title}
                  imageURL={item.image_url}
                  description={item.description}
                />
              );
            })
            /* <HornedBeast
            title="UniWhal"
            imageURL="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
            description="A unicorn and a narwhal nuzzling their horns"
          /> */
          }
        </main>
      </>
    );
  }
}

export default Main;

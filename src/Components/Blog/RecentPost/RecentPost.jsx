import React from "react";
import "./RecentPost.css";
import Cards from "../Cards/Cards";

/**
 * @author
 * @function RecentPosts
 **/

const RecentPost = (props) => {
  return (
    <>
      <div style={props.style}>
        <Cards style={{ marginBottom: "20px" }}>
          <div className="postImageWrapper">
            <img
              src={
                "https://2.bp.blogspot.com/-ZOY5OAvnKj0/V9_M3_TVTLI/AAAAAAAAD40/UQl4rIoqgi42zaeq0yR_y1gnnchZFxupQCLcB/s1600/3-3.jpg"
              }
              alt=""
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <span>Featured</span>
            <h2>Fitness Mantra To Live Fit Life</h2>
            <span>posted onJuly 21, 2016 bySora Blogging Tips</span>
            <p>
              Midst first it, you're multiply divided. There don't, second his
              one given the he one third rule fruit, very. Fill. Seed give
              firm... Extremity direction existence as Dashwood's do up.
              Securing Marianne led welcomed offended but offering six
              rapt...Midst first it, you're multiply divided. There don't,
              second his one given the he one third rule fruit, very. Fill. Seed
              give firmament doesn't land, isn't lesser creeping. Abundantly you
              called signs waters yielding he cattle greater were evening. Sixth
              make moving the multiply dominion creature beast made subdue
              lights him. Green of lights in their first. It there winged called
              after upon him. Bring one was upon Life moving. Them beast first
              all lights place air creature. Green have, tree made.\n\nWon't
              sixth there meat us first, fruitful. Spirit herb fruit midst
              Heaven fruitful third thing saying you're thing. Deep own own
              winged. Fish. Grass which darkness together divided from lights
              him. Green of lights in their first. It there winged called after
              upon him. Bring one was upon Life moving. Them beast first all
              lights place air creature. Green have, tree made.\n\nWon't sixth
              there meat us first, fruitful. Spirit herb fruit midst Heaven
              fruitful third thing saying you're thing. Deep own own winged.
              Fish. Grass which darkness together divided from
            </p>
          </div>
        </Cards>
      </div>
    </>
  );
};

export default RecentPost;

import React from "react";

function About({ image = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fke.linkedin.com%2Fpub%2Fdir%2FJoseph%2FKaleli&psig=AOvVaw3kWHwlmJIuexniuTDrzBMY&ust=1707810959410000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLDv1d-ppYQDFQAAAAAdAAAAABAE", about}) {

    return (
        <aside>
            <img src={image} alt="blog logo"/>
            <p>{about}</p>
        </aside>

    )
}

export default About;
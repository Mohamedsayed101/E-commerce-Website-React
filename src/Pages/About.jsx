import React from "react";
import teamImage from "../assets/images/team.jpg";

export default function About() {
  const team = [
    {
      name: "Mohamed Sayed",
      role: "Frontend Developer",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sara Ahmed",
      role: "Marketing Manager",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Omar Tarek",
      role: "UI/UX Designer",
      img: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Aya Khaled",
      role: "Content Creator",
      img: "https://randomuser.me/api/portraits/women/51.jpg",
    },
    {
      name: "Mostafa Mahmoud",
      role: "Back-End Developer",
      img: "https://randomuser.me/api/portraits/men/61.jpg",
    },
    {
      name: "Nour El-Din",
      role: "Customer Support",
      img: "https://randomuser.me/api/portraits/men/26.jpg",
    },
  ];

  return (
    <div className="container py-5">
      {/* Section 1: Header */}
      <div className="text-center mb-5 ">
        <h2 className="fw-bold display-5">
          About <span className="text-primary">MO.Shop</span>
        </h2>
        <p className="lead text-muted">
          Your trusted source for high-quality and exclusive products.
        </p>
      </div>

      {/* Section 2: Image + Intro */}
      <div className="row align-items-center mb-5 mt-5">
        <div className="col-md-6">
          <img
            src={teamImage}
            alt="Our Mission"
            className=" rounded shadow card-img-top"
          />
        </div>
        <div className="col-md-6 mb-5 mt-5">
          <h4 className="fw-bold mb-3">Who We Are</h4>
          <p>
            At <strong>MO.Shop</strong>, we provide stylish, high-quality, and
            innovative products. Whether fashion, gadgets, or lifestyle – we’ve
            got you covered.
          </p>
          <p>
            Our mission is to make online shopping fast, easy, and enjoyable.
          </p>
        </div>
      </div>

      {/* Section 3: Our Values */}
      <div className="mb-5 mt-5">
        <h4 className="fw-bold text-center mb-4">Our Values</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Customer Satisfaction</li>
          <li className="list-group-item">High Quality Products</li>
          <li className="list-group-item">Fast & Reliable Delivery</li>
          <li className="list-group-item">Continuous Improvement</li>
        </ul>
      </div>

      {/* Section 4: Team Members */}
      <div className="mb-5 mt-5">
        <h4 className="fw-bold text-center mb-4">Meet Our Team</h4>
        <div className="row">
          {team.map((member, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <div className="card shadow h-100 text-center border-0">
                <img
                  src={member.img}
                  className="card-img-top rounded-top"
                  alt={member.name}
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">{member.name}</h5>
                  <p className="card-text text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

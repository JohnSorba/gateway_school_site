import { Link } from "react-router-dom";
import { profileData } from "../data/ApplicationData";
import "./StaffSlide.css";
import { useSubpage } from "../Contexts/SubpageContext";

function StaffSlide() {
  const { setCurPageIndex } = useSubpage();

  const goToIndex = () => {
    setCurPageIndex(3);
  };

  const goToSpeech = () => {
    setCurPageIndex(5);
  };

  return (
    <section id="staff-section">
      <div className="staff-container">
        <h1>Management and Staff</h1>
        <h3>
          {" "}
          Meet the faces behind our educational mission and discover the impact
          they make in every pupil's life.
        </h3>
        <div className="staff-container-flex">
          {profileData.map((profile) => (
            <figure key={profile.title}>
              <img src={profile.image} alt={profile.title} />
              <figcaption>
                <p>{profile.title}</p>
                <p>{profile.subject}</p>
                <Link
                  to={profile.profileLink}
                  className="figcaption-link"
                  onClick={goToIndex}
                >
                  Learn More
                </Link>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="speech-grid">
          <article>
            <img
              src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=612x612&w=0&k=20&c=XdZqQ92Yk82otKZio_pE0KURn0U08sIr5Vz9bFSm7bM="
              alt="uncle Augustine"
            />
          </article>
          <article>
            <h3>Head Teacher's Remarks</h3>
            <blockquote>
              <span className="text-3xl">O</span>ur staff members are not just
              educators; they are mentors, guides, and role models who play a
              pivotal role in shaping the educational journey of our students.
              Committed to excellence, they go above and beyond to create a
              nurturing and inspiring learning environment. From our passionate
              teachers who impart knowledge and instill a love for learning to
              our dedicated support staff who ensure a safe and organized
              campus, every member of our team contributes to the holistic
              development of our students.
              <Link
                to="/about/headteacher-speech"
                className="read-more"
                onClick={goToSpeech}
              >
                {" "}
                read more...
              </Link>
            </blockquote>
          </article>
        </div>
      </div>
    </section>
  );
}

export default StaffSlide;
//

export function HeadTeacherSpeech() {
  return (
    <>
      <article className="headteacher-speech">
        <h1>Head Teacher's Remarks</h1>

        <div className="heading">
          <img
            src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=612x612&w=0&k=20&c=XdZqQ92Yk82otKZio_pE0KURn0U08sIr5Vz9bFSm7bM="
            alt="uncle Augustine"
          />
          <p>
            <span className="text-3xl">O</span>ur staff members are not just
            educators; they are mentors, guides, and role models who play a
            pivotal role in shaping the educational journey of our students.
            Committed to excellence, they go above and beyond to create a
            nurturing and inspiring learning environment. From our passionate
            teachers who impart knowledge and instill a love for learning to our
            dedicated support staff who ensure a safe and organized campus,
            every member of our team contributes to the holistic development of
            our students. Their unwavering dedication is the driving force
            behind our school's success, fostering a culture of innovation,
            growth, and academic achievement.
          </p>
        </div>
        <p>
          Committed to excellence, they go above and beyond to create a
          nurturing and inspiring learning environment. From our passionate
          teachers who impart knowledge and instill a love for learning to our
          dedicated support staff who ensure a safe and organized campus, every
          member of our team contributes to the holistic development of our
          students. Their unwavering dedication is the driving force behind our
          school's success, fostering a culture of innovation, growth, and
          academic achievement.
        </p>
        <p>
          Committed to excellence, they go above and beyond to create a
          nurturing and inspiring learning environment. From our passionate
          teachers who impart knowledge and instill a love for learning to our
          dedicated support staff who ensure a safe and organized campus, every
          member of our team contributes to the holistic development of our
          students. Their unwavering dedication is the driving force behind our
          school's success, fostering a culture of innovation, growth, and
          academic achievement.
        </p>
        <p>
          Committed to excellence, they go above and beyond to create a
          nurturing and inspiring learning environment. From our passionate
          teachers who impart knowledge and instill a love for learning to our
          dedicated support staff who ensure a safe and organized campus, every
          member of our team contributes to the holistic development of our
          students. Their unwavering dedication is the driving force behind our
          school's success, fostering a culture of innovation, growth, and
          academic achievement.
        </p>
        <blockquote>
          &mdash; <em className="text-xl">Janet Hinga</em>
          <p>HeadTeacher</p>
        </blockquote>
      </article>
    </>
  );
}

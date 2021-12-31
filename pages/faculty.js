import PropTypes from "prop-types";
import Card from "../components/card";
import Header from "../components/header";
import data from "../data/faculty/faculty.json";
import styles from "../styles/grid.module.css";
import Head from "next/head";
import Footer from "../components/footer";

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>;
Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

const FacultyPage = () => (
  <div>
    <Head>
      <title>Faculty | Domain Square +</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/d2s-logo.png" />
    </Head>
    <Header />
    <div className="text-gray-100 my-12 sm:mt-4 mt-20 sm:px-32 px-10">
      <h1 className="about text-center sm:text-6xl text-5xl font-semibold mb-16">
        Faculty
      </h1>
      {data.map((teacher, index) => (
        <div key={index}>
          <Grid>
            {teacher.members.map((member) => (
              <Card key={member.name}>
                <div className="sm:text-3xl text-2xl font-semibold">{member.name}</div>
                <div className='text-md'>{member.role}</div>
              </Card>
            ))}
          </Grid>
        </div>
      ))}
    </div>
    <div className='sm:fixed bottom-0 w-full'>
      <Footer />
    </div>
  </div>
);

export default FacultyPage;
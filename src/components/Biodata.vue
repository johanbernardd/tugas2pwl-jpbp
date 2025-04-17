<template>
  <div class="container">
    <h1 class="title">Johanes Paulus Bernard Purek</h1>
    <img
      src="@/assets/johanes-photo.png"
      alt="Foto Profil"
      class="profile-img"
    />

    <div class="info">
      <p>
        <strong>Malang, East Java</strong> |
        <a href="mailto:johanesbernard26@gmail.com" target="_blank">
          <strong>Email</strong>
        </a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/johanespurek" target="_blank">
          <strong>LinkedIn</strong>
        </a>
        |
        <a href="https://johanbernardd.framer.website" target="_blank">
          <strong>Portfolio Website</strong>
        </a>
      </p>

      <a
        href="/Resume_Johanes Paulus Bernard Purek.pdf"
        download
        class="download-btn"
      >
        📄 Download CV (PDF)
      </a>
    </div>

    <section>
      <h2>Summary</h2>
      <p>
        Mahasiswa Semester 6 Sistem Informasi UB yang antusias di bidang Data
        Analytics, khususnya role Data Analyst, Data Scientist, dan Business
        Intelligence Analyst.
      </p>
    </section>

    <section>
      <h2>Experience</h2>
      <ul>
        <li>
          <strong> Project-Based Virtual Intern: Data Scientist</strong> - Home
          Credit Indonesia (Mar 2025)
        </li>
        <li>
          <strong>Laboratory Teaching Assistant</strong> - FILKOM UB (Feb-Dec
          2024)
        </li>
      </ul>
    </section>

    <section>
      <h2>Education</h2>
      <ul>
        <li>
          <strong>Universitas Brawijaya</strong>, Sistem Informasi (GPA
          3.79/4.00)
        </li>
        <li><strong>SMAK Kolese Santo Yusup</strong>, MIPA (GPA 87.34/100)</li>
      </ul>
    </section>

    <section>
      <h2>Skills</h2>
      <ul class="skills">
        <li>SQL</li>
        <li>Python</li>
        <li>Java</li>
        <li>Tableau</li>
        <li>Power BI</li>
        <li>Excel</li>
        <li>Looker Studio</li>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Data Storytelling</li>
        <li>Business Acumen</li>
        <li>Project Management</li>
        <li>Problem Solving</li>
        <li>Teamwork</li>
        <li>Communication</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "BiodataComponent",
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

.title {
  text-align: center;
  font-size: 2.4rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 20px;
}

.profile-img {
  display: block;
  margin: 0 auto 20px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.info {
  text-align: center;
  margin-bottom: 30px;
}

a {
  color: #1e88e5;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.download-btn {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 18px;
  background-color: #0e4714;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s;
}

.download-btn:hover {
  background-color: rgb(10, 48, 13);
  text-decoration: none;
}

h2 {
  margin-top: 30px;
  color: #2c3e50;
  border-bottom: 2px solid #eee;
  padding-bottom: 5px;
}

ul {
  padding-left: 20px;
  margin: 0;
}

ul li {
  margin-bottom: 6px;
  padding-left: 4px;
  text-indent: -4px;
  line-height: 1.5;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
}

.skills li {
  background-color: #0e4714;
  color: white;
  padding: 6px 12px;
  border-radius: 5px;
  font-size: 14px;
}
</style>

<template>
  <div class="recomended">
    <h4 class="m">Popular Courses</h4>

    <div class="Rcard">
      <markCard v-for="(recomended, index) in fetchedCourses" :key="index" :course-Data="recomended" />
    </div>
  </div>
</template>
<script>
import markCard from "@/components/markCard.vue";
import axios from 'axios';
import { API_BASE_URL } from "../config";
export default {
  name: "recomanded",
  components: {
    markCard,
  },
  data() {
    return {
      fetchedCourses: [],
      items: [
        { title: "UX/UI", img: "../assets/react.png" },
        // { title: "React", img: "react.png" },
        // { title: "PHP", img: "php.png" },
        //{ title: "JavaScript", img: "js.png" },
      ],
    };
  },
  mounted() {

    axios.get(`${API_BASE_URL}/api/courses/recommended-courses`, { withCredentials: true })
      .then(response => {
        this.fetchedCourses = response.data;
        console.log(this.fetchedCourses) // Update the courses data property with the fetched data

      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });

  },
};
</script>
<style scooped>
.m {
  margin-top: 30px;
  margin-left: 60px;
  color: rgba(0, 0, 0, 0.8);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  grid-row: 1;
}

.s {
  margin-top: 25px;
  position: absolute;
  right: 80px;
  color: #49BBBD;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  grid-row: 1;
}



.Rcard {
  margin-top: 30px;
  display: flex;
  gap: 30;
  padding-left: 50px;
  grid-row: 2;
}


.recomended {
  margin-top: 50px;
  width: 100%;
  padding-bottom: 40px;
  background-color: rgb(197, 220, 245);
  display: grid;
  gap: 0;
  grid-template-rows: 1fr 9fr;
  padding-top: 10px;

}
</style>
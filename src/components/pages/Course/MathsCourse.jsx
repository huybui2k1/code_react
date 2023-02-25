import React, { Component } from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Link } from 'react-router-dom'
class MathsCourse extends Component {
  render() {
    return (
      <>
        <div className="breadcrumss">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/course3">
              <p>COURSE</p>
            </Link>
            <Link underline="hover" color="inherit" to="/course4">
              <p>Mathematics(Maths)</p>
            </Link>
            <Link underline="hover" color="inherit" to="/course4">
              <p>View Detail Flutter</p>
            </Link>
          </Breadcrumbs>
        </div>

        <Container>
          <Row className="text-center">
            <Col>
              <h1>FLUTTER PROGRAMMING COURSE</h1>
              <p>
                Learn basic and advanced math in the environment Advanced online
                learning.
              </p>
              <Image
                src="https://files.fullstack.edu.vn/f8-prod/blog_posts/773/6163b59ac750b.png"
                alt="Flutter Course"
                fluid
              />
              <Button variant="primary">Đăng ký ngay</Button>
            </Col>
          </Row>
          <div>
            <h2>INTRODUCE FLUTTER </h2>
            <h3>FLUTTER</h3>
            <p>
              Flutter was developed to solve common problems in mobile, Fast
              Development and Native Performance. If React Native only ensures
              Fast Development and pure native code only ensures Native
              Performance, then Flutter can do both of the above
            </p>
            <p>
              Flutter is an open source mobile app development SDK created out
              by Google.
            </p>
            <p>Flutter excels thanks to factors such as:</p>
            <p>
              - Rapid App Development: Its hot reload feature makes it quick and
              easy to test, build user interfaces, add features, and fix bugs
              faster. Experience a second reload, without losing state, on
              emulators, simulators and devices for iOS and Android.
            </p>
            <p>
              - Beautiful and expressive UI: Indulge your users with beautiful
              Material Design and Cupertino (iOS-flavor) built-in widgets, rich
              motion APIs, smooth natural scrolling, and background self-aware
              platform
            </p>
            <p>
              - Use Dart (object-oriented programming language developed by
              Google) to help release or rebuild projects quickly
            </p>
            <Image src="https://files.fullstack.edu.vn/f8-prod/blog_posts/773/6163b8397c19e.png" />
            <p>
              In this course, you will learn from the language used in Flutter,
              Dart, to building a complete application with products such as
              shopping cart, chat, weather forecast, etc. personal projects or
              interviews
            </p>
            <img
              src="https://khoapham.vn/public/images/flutter/khoa-hoc-lap-trinh-flutter-1-khoapham.vn.jpg"
              alt=""
            />
            <h2>COURSE OBJECTIVES</h2>
            <p>- The course will help you master Flutter knowledge</p>
            <p>
              - The course brings you closer to the real working environment
              from A-Z, helping you to confidently apply for an interview.
            </p>
            <h2>OBJECT OF STUDY</h2>
            <p>
              - Course for beginners to get acquainted with Flutter and mobile
              programming.
            </p>
            <p>- Mobile programmers (iOS native, Android)</p>
            <h2>CONDITIONS OF STUDY</h2>
            <p>-Know any programming language. </p>
            <p>- Students use their own laptops during the learning process.</p>
            <h2>DEVELOPMENT - CERTIFICATE</h2>
            <p>
              Attending more than 80% of the classes, and completing the final
              project, students will be granted a Certificate of Course
              Completion from the Center for Informatics Training, which is
              valid nationwide.
            </p>
            <h2>TIME & FEES</h2>
            <p>
              - <strong>Duration</strong>: 2 months (3 sessions/week, 1h45
              minutes/session).
            </p>
            <p>
              - <strong>Tuition at Faculty of Pham</strong>: 4,350,000 VND
            </p>
            <p>
              - <strong>Study location</strong>: Computer Science Training
              Center 263/14 Ly Thuong Kiet Street, Ward 15, District 11, HCMC
            </p>
            <h2>CONTENT OF FLUTTER PROGRAMMING COURSE</h2>
            <h3>Chapter 1: The Dart Language</h3>
            <p> - Environment settings </p>
            <p> - Basic data type</p>
            <p> - Conditional sentences </p>
            <p> - Arrays and objects</p>
            <p> - Object Oriented</p>
            <p> - Error handling with try catch</p>
            <h3>Chapter 2: Asynchronous Programming</h3>
            <p>- Future, Futurebuilder</p>
            <p>- Stream, StreamBuilder</p>
            <h3>Chapter 3: Installing Flutter</h3>
            <p>
              - Install app build tools (Flutter SDK, Android Studio, Xcode)
            </p>
            <p>- About widgets</p>
            <p>
              - Learn about common widget types (Stateless Widget,
              StateFullWidget, Material, Scafford)
            </p>
            <h3>Chapter 4: Inheritedwidget</h3>
            <p>
              - Learn about data management through Inheritted Widget for
              elements
            </p>
            <h2>Course summary</h2>
            <p>- Troubleshooting</p>
            <p>- Final project guide</p>
            <h2>SAMPLE APPLICATION FOR INSTANT PRACTICE IN CLASS</h2>
            <img
              src="https://khoapham.vn/public/images/flutter/khoa-hoc-lap-trinh-flutter-2-khoapham.vn.jpg"
              alt=""
            />
          </div>
          {/* <Row>
            <Col>
              <h2>Chủ Đề Chính</h2>
              <ul>
                <li>Số học</li>
                <li>Đại số</li>
                <li>Không gian vecto</li>
                <li>Hàm số</li>
                <li>...</li>
              </ul>
            </Col>
            <Col>
              <h2>Tính Năng Nổi Bật</h2>
              <ul>
                <li>Giảng viên chuyên môn</li>
                <li>Bài tập và kiểm tra hàng tuần</li>
                <li>Hỗ trợ trực tuyến 24/7</li>
                <li>...</li>
              </ul>
            </Col>
          </Row> */}
        </Container>
      </>
    )
  }
}

export default MathsCourse

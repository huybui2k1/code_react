import React from 'react'
import './Ourstory.css'

function Ourstory() {
  return (
    <>
      <div className="code-story-container">
        <div className="code-story">
          <div class="code-story-header">Story of Star Classes's Student</div>
          <div id="carousel-run" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item  active " data-bs-interval="10000">
                <div className="cs-slider-item">
                  <img
                    src="https://aptech.fpt.edu.vn/tuyensinh/wp-content/uploads/2022/12/Pham-Tien-Dung.png"
                    class="slider-item-img"
                    alt="..."
                  />
                  <div class="slider-item-text-container">
                    <div class="slider-item-text">
                      <div class="slider-item-ps-name">Mr. Pham Tien Dung</div>
                      <div class="slider-item-ps-bio">
                        Mobile Developer - Former Student of Start Classes
                      </div>
                      <div class="slider-item-ps-st">
                        "The most difficulty for me is that I was in a selected
                        class in high school. Most students in my class chose an
                        official university, therefore, I was the black sheep in
                        the herd. Teachers and classmates doubted my decision.
                        However, I see that I have made a good decision and I am
                        in the right direction with my career choice based on my
                        desire."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <div className="cs-slider-item">
                  <img
                    src="https://aptech.fpt.edu.vn/tuyensinh/wp-content/uploads/2022/12/Ngo-Ngoc-Duc.png"
                    class="slider-item-img"
                    alt="..."
                  />
                  <div class="slider-item-text-container">
                    <div class="slider-item-text">
                      <div class="slider-item-ps-name">Mr. Ngo Ngoc Duc</div>
                      <div class="slider-item-ps-bio">
                        Former Student of Start Classes
                      </div>
                      <div class="slider-item-ps-st">
                        "I was born in 1983. When I finished high school, I
                        wasn't in good enough condition to chase a programming
                        course. After several years working on other fields and
                        having fortune to know about the IT field, I want to
                        have a course to learn programming in a professional way
                        to acquire other career chances, I have worked in the
                        automation field and my work includes embedded
                        programming so I think I can learn other programming
                        fields quickly."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="cs-slider-item">
                  <img
                    src="https://aptech.fpt.edu.vn/tuyensinh/wp-content/uploads/2022/12/Nguyen-Quynh-Thu.png"
                    class="slider-item-img"
                    alt="..."
                  />
                  <div class="slider-item-text-container">
                    <div class="slider-item-text">
                      <div class="slider-item-ps-name">Ms Nguyen Quynh Thu</div>
                      <div class="slider-item-ps-bio">
                        Manual Tester - Former Student of Start Classes
                      </div>
                      <div class="slider-item-ps-st">
                        "According to my experience, females will have more
                        difficulties in a programming career. However, coding is
                        not the only work in the IT field. Girls who do not have
                        a strong background can try the Tester position. After
                        that, your mindset and logical thinking when learning
                        programming will be very helpful in the real working
                        environment."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              class="carousel-control-prev cs-slider-control carousel-dark-control-icon-filter "
              type="button"
              data-bs-target="#carousel-run"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next cs-slider-control carousel-dark-control-icon-filter"
              type="button"
              data-bs-target="#carousel-run"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ourstory

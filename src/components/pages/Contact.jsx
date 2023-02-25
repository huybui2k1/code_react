import React from 'react'
import './Contact.css'
// import { Button } from './Button';
// import { Link } from 'react-router-dom';
function Contact() {
  return (
    <>
      <div>
        <div className="contact-container">
          <h2 className="title">THÔNG TIN LIÊN HỆ</h2>
          <h3>Phòng tư vấn, tuyển sinh</h3>
          <address>
            <strong>Địa chỉ:</strong>Tòa nhà VNPT, 38 Yên Bái, Quận Hải Châu, TP
            Đà Nẵng
            <br />
            <strong>Điện thoại:</strong>0236.3.779.779
            <br />
            <strong>Fax:</strong>0236.3.779.555
            <br />
            <strong>Email:</strong>{' '}
            <a href="mailto:tuyensinh@softech.vn">tuyensinh@softech.vn</a>
          </address>
        </div>

        {/*tư vấn*/}
        <div className="contact-container">
          <h3 style={{ textAlign: 'center' }}>
            Tư vấn viên, hỗ trợ trực tuyến
          </h3>
          <div className="row">
            <div className="col-sm-4" style={{ paddingBottom: '20px' }}>
              <div
                className="row"
                style={{ textAlign: 'center', paddingBottom: '8px' }}
              >
                <img
                  alt="Ho tro tu van"
                  src="https://aptech-danang.edu.vn/Content/ace/images/support1a.jpg"
                  style={{ borderRadius: '50%', width: '60%' }}
                  className="img-circle img-thumbnail"
                />
              </div>
              <div
                className="row"
                style={{
                  fontWeight: 'bold',
                  color: '#AE1A1F',
                  textAlign: 'center',
                }}
              >
                <h3>NI NA</h3>
              </div>
              <div className="row">
                <div style={{ fontWeight: 'bold' }} className="col-xs-4">
                  Facebook:
                </div>
                <div className="col-xs-8">
                  <a
                    href="https://www.facebook.com/messages/t/tran.na.16"
                    target="_blank"
                    title="Ho tro tu van qua Facebook"
                  >
                    Facebook Message
                  </a>
                </div>
              </div>
              <div className="row">
                <div style={{ fontWeight: 'bold' }} className="col-xs-4">
                  Zalo:
                </div>
                <div className="col-xs-8">
                  <a
                    href="http://zalo.me/0775440700"
                    target="_blank"
                    title="Ho tro tu van qua Zalo"
                  >
                    Zalo Message
                  </a>
                </div>
              </div>
              <div className="row">
                <div style={{ fontWeight: 'bold' }} className="col-xs-4">
                  Email:
                </div>
                <div className="col-xs-8">
                  <a
                    href="mailto:nattn@softech.vn"
                    title="Ho tro tu van qua email"
                  >
                    Send Email
                  </a>
                </div>
              </div>
              <div className="row">
                <div style={{ fontWeight: 'bold' }} className="col-xs-4">
                  Cellphone:
                </div>
                <div className="col-xs-8">0917.93.54.68</div>
              </div>
            </div>
            <div className="col-sm-4" style={{ paddingBottom: '20px' }}>
              <div
                className="row"
                style={{ textAlign: 'center', paddingBottom: '8px' }}
              >
                <img
                  alt="Ho tro tu van"
                  src="https://aptech-danang.edu.vn/Content/ace/images/support2a.jpg"
                  style={{ borderRadius: '50%', width: '60%' }}
                  className="img-circle img-thumbnail"
                />
              </div>
              <div
                className="row"
                style={{
                  fontWeight: 'bold',
                  color: '#AE1A1F',
                  textAlign: 'center',
                }}
              >
                <h3>CẨM CHÂU</h3>
              </div>
              <div className="row">
                <div style={{ fontWeight: 'bold' }} className="col-xs-4">
                  Facebook:
                </div>
                <div className="col-xs-8">
                  <a
                    href="https://www.facebook.com/messages/t/yen.lang.1"
                    target="_blank"
                    title="Ho tro tu van qua Facebook"
                  >
                    Facebook Message
                  </a>
                </div>
              </div>
              <div className="row">
                <div style={{ fontWeight: 'bold' }} className="col-xs-4">
                  Zalo:
                </div>
                <div className="col-xs-8">
                  <a
                    href="http://zalo.me/0934917241"
                    target="_blank"
                    title="Ho tro tu van qua Zalo"
                  >
                    Zalo Message
                  </a>
                </div>
              </div>
              <div className="row">
                <div style={{ fontWeight: 'bold' }} className="col-xs-4">
                  Email:
                </div>
                <div className="col-xs-8">
                  <a
                    href="mailto:chauntc@softech.vn"
                    title="Ho tro tu van qua email"
                  >
                    Send Email
                  </a>
                </div>
              </div>
              <div className="row">
                <div style={{ fontWeight: 'bold' }} className="col-xs-4">
                  Cellphone:
                </div>
                <div className="col-xs-8">0969.28.99.22</div>
              </div>
            </div>
            <div className="col-sm-4" style={{ paddingBottom: '20px' }}>
              <div
                className="row"
                style={{ textAlign: 'center', paddingBottom: '8px' }}
              >
                <img
                  alt="Ho tro tu van"
                  src="https://aptech-danang.edu.vn/Content/ace/images/support3.jpg"
                  style={{ borderRadius: '50%', width: '60%' }}
                  className="img-circle img-thumbnail"
                />
              </div>
              <div
                className="row"
                style={{
                  fontWeight: 'bold',
                  color: '#AE1A1F',
                  textAlign: 'center',
                }}
              >
                <h3>MAI TRÂM</h3>
              </div>
              <div className="row">
                <div style={{ fontWeight: 'bold' }} className="col-xs-4">
                  Facebook:
                </div>
                <div className="col-xs-8">
                  <a
                    href="https://www.facebook.com/messages/t/vonumaitram"
                    target="_blank"
                    title="Ho tro tu van qua Facebook"
                  >
                    Facebook Message
                  </a>
                </div>
              </div>
              <div className="row">
                <div style={{ fontWeight: 'bold' }} className="col-xs-4">
                  Zalo:
                </div>
                <div className="col-xs-8">
                  <a
                    href="http://zalo.me/0393917446"
                    target="_blank"
                    title="Ho tro tu van qua Zalo"
                  >
                    Zalo Message
                  </a>
                </div>
              </div>
              <div className="row">
                <div style={{ fontWeight: 'bold' }} className="col-xs-4">
                  Email:
                </div>
                <div className="col-xs-8">
                  <a
                    href="mailto:tramvnm@softech.vn"
                    title="Ho tro tu van qua email"
                  >
                    Send Email
                  </a>
                </div>
              </div>
              <div className="row">
                <div style={{ fontWeight: 'bold' }} className="col-xs-4">
                  Cellphone:
                </div>
                <div className="col-xs-8">0966.14.99.22</div>
              </div>
            </div>
          </div>
        </div>
        {/*map*/}
        <div className="contact-container">
          <a href="https://www.google.com/maps/place/38+Y%C3%AAn+B%C3%A1i,+H%E1%BA%A3i+Ch%C3%A2u+1,+H%E1%BA%A3i+Ch%C3%A2u,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vietnam/@16.0694091,108.2203963,17z/data=!3m1!4b1!4m5!3m4!1s0x31421833d5d33d15:0xdbd9a00a7271b8c8!8m2!3d16.069404!4d108.222585">
            <button
              id="btnViewMap"
              data-action="viewmap"
              class="btn btn-danger"
            >
              Xem trên bản đồ
            </button>
          </a>
        </div>
        <div className="contact-container">
          <iframe
            style={{
              border: '3px solid rgb(152, 74, 74)',
              borderRadius: '10px',
              width: '100%',
              height: '500px',
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9250726479345!2d108.22257669999999!3d16.069377499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421833d5d51043%3A0x596a384ad09764ee!2zVMOyYSBOaMOgIFZOUFQgxJDDoCBO4bq1bmcsIDM4IFnDqm4gQsOhaSwgSOG6o2kgQ2jDonUgMSwgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMA!5e0!3m2!1sen!2s!4v1673098039372!5m2!1sen!2s"
            frameBorder={0}
            allowFullScreen
          />
        </div>
        {/*ket noi*/}
        <div className="contact-container">
          <h1 class="ace-header">KẾT NỐI VỚI CHÚNG TÔI</h1>
          <div className="row">
            <div className="col-md-4">
              <div
                className="fb-page fb_iframe_widget"
                data-href="https://www.facebook.com/softechaptech/"
                data-width={500}
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
                data-show-posts="false"
                fb-xfbml-state="rendered"
                fb-iframe-plugin-query="adapt_container_width=true&app_id=&container_width=360&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fsoftechaptech%2F&locale=en_US&sdk=joey&show_facepile=true&show_posts=false&small_header=false&width=500"
              >
                <span
                  style={{
                    verticalAlign: 'bottom',
                    width: '360px',
                    height: '130px',
                  }}
                >
                  <iframe
                    name="f17e706764aef7"
                    width="500px"
                    height="1000px"
                    data-testid="fb:page Facebook Social Plugin"
                    title="fb:page Facebook Social Plugin"
                    frameBorder={0}
                    allowTransparency="true"
                    allowFullScreen="true"
                    scrolling="no"
                    allow="encrypted-media"
                    src="https://www.facebook.com/v3.2/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3437a197cbbdec%26domain%3Daptech-danang.edu.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Faptech-danang.edu.vn%252Ff169814d9fb93%26relation%3Dparent.parent&container_width=360&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fsoftechaptech%2F&locale=en_US&sdk=joey&show_facepile=true&show_posts=false&small_header=false&width=500"
                    style={{
                      border: 'none',
                      visibility: 'visible',
                      width: '360px',
                      height: '130px',
                    }}
                    className
                  />
                </span>
              </div>
            </div>
            <div className="col-md-4 hidden-xs">
              <div
                className="fb-page fb_iframe_widget"
                data-href="https://www.facebook.com/softecharena/"
                data-width={500}
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
                data-show-posts="false"
                fb-xfbml-state="rendered"
                fb-iframe-plugin-query="adapt_container_width=true&app_id=&container_width=360&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fsoftecharena%2F&locale=en_US&sdk=joey&show_facepile=true&show_posts=false&small_header=false&width=500"
              >
                <span
                  style={{
                    verticalAlign: 'bottom',
                    width: '360px',
                    height: '130px',
                  }}
                >
                  <iframe
                    name="f5f06de7a25818"
                    width="500px"
                    height="1000px"
                    data-testid="fb:page Facebook Social Plugin"
                    title="fb:page Facebook Social Plugin"
                    frameBorder={0}
                    allowTransparency="true"
                    allowFullScreen="true"
                    scrolling="no"
                    allow="encrypted-media"
                    src="https://www.facebook.com/v3.2/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df21c65c842dd51%26domain%3Daptech-danang.edu.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Faptech-danang.edu.vn%252Ff169814d9fb93%26relation%3Dparent.parent&container_width=360&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fsoftecharena%2F&locale=en_US&sdk=joey&show_facepile=true&show_posts=false&small_header=false&width=500"
                    style={{
                      border: 'none',
                      visibility: 'visible',
                      width: '360px',
                      height: '130px',
                    }}
                    className
                  />
                </span>
              </div>
            </div>
            <div className="col-md-4 hidden-xs">
              <div
                className="fb-page fb_iframe_widget"
                data-href=" https://www.facebook.com/aptech.io/"
                data-width={500}
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
                data-show-posts="false"
                fb-xfbml-state="rendered"
                fb-iframe-plugin-query="adapt_container_width=true&app_id=&container_width=360&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Faptech.io%2F&locale=en_US&sdk=joey&show_facepile=true&show_posts=false&small_header=false&width=500"
              >
                <span
                  style={{
                    verticalAlign: 'bottom',
                    width: '360px',
                    height: '130px',
                  }}
                >
                  <iframe
                    name="f78cf47413c2cc"
                    width="500px"
                    height="1000px"
                    data-testid="fb:page Facebook Social Plugin"
                    title="fb:page Facebook Social Plugin"
                    frameBorder={0}
                    allowTransparency="true"
                    allowFullScreen="true"
                    scrolling="no"
                    allow="encrypted-media"
                    src="https://www.facebook.com/v3.2/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df38756638868a8%26domain%3Daptech-danang.edu.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Faptech-danang.edu.vn%252Ff169814d9fb93%26relation%3Dparent.parent&container_width=360&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Faptech.io%2F&locale=en_US&sdk=joey&show_facepile=true&show_posts=false&small_header=false&width=500"
                    style={{
                      border: 'none',
                      visibility: 'visible',
                      width: '360px',
                      height: '130px',
                    }}
                    className
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/*nhap thong tin*/}
        <div className="contact-inner-container">
          <div className="contact-info-container">
            <h1 className="contact-heading">Thông tin liên hệ</h1>
            <p className="contact-description">
              Vui lòng hoàn thiện form thông tin bên dưới.<br></br>
              Aptech Đà Nẵng sẽ lên hệ với bạn để gải đáp, hoàn toàn miễn phí.
            </p>
            <div className="line" />
            <div className="contact-details">
              <h3>
                <i className="fa fa-map-marker" /> Address
              </h3>
              <p>38 Yên Bái, Quận Hải Châu, Thành Phố Đà Nẵng</p>
            </div>

            <div className="contact-details">
              <h3>
                <i className="fa fa-envelope" /> Email
              </h3>
              <p>tuyensinh@softech.vn</p>
            </div>

            <div className="contact-details">
              <h3>
                <i className="fa fa-clock-o" /> Time
              </h3>
              <p>8:00 - 22:00</p>
            </div>

            <div className="contact-details">
              <h3>
                <i className="fa fa-phone" /> Lets Talk
              </h3>
              <p>0236.3.779.779</p>
            </div>

            <div className="social-link-container">
              <i className="fa fa-instagram" />
              <i className="fa fa-facebook" />
              <i className="fa fa-twitter" />
              <i className="fa fa-linkedin" />
            </div>
          </div>
          <div className="contact-form">
            <form className="form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="input-field form-input"
                  placeholder="Tên của bạn"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="input-field form-input"
                  placeholder="Email của bạn"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="input-field form-input"
                  name="subject"
                  placeholder="Nội dung"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows={5}
                  className="input-field form-input"
                  placeholder="Tin nhắn"
                  defaultValue={''}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  className="input-field submit-btn"
                  defaultValue="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

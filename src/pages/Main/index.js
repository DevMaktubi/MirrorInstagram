import React from 'react';
// eslint-disable-next-line object-curly-newline
import {
  FaEllipsisH,
  FaHeart,
  FaComment,
  FaPaperPlane,
  FaBookmark,
} from 'react-icons/fa';
import eu from '../../assets/images/eu.jpeg';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import fernanda from '../../assets/images/fernanda.jpg';
import cicero from '../../assets/images/cicero.jpg';
import tuco from '../../assets/images/tuco.jpg';

// eslint-disable-next-line object-curly-newline
import {
  Container,
  Post,
  Widgets,
  Wrapper,
  Comments,
  PostWrapper,
  Story,
  Suggestion,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Wrapper>
        <PostWrapper>
          <Post>
            <div className="DivFotos">
              <div className="title">
                <div className="perfilWrapper">
                  <img src={eu} alt="" />
                  <strong>breno.dmgd</strong>
                </div>
                <FaEllipsisH size={18} />
              </div>
              <img src={img1} alt="" />
              <Comments>
                <div className="actions">
                  <div className="actionWrapper">
                    <FaHeart size={33} />
                    <FaComment size={33} className="inverted" />
                    <FaPaperPlane size={33} />
                  </div>
                  <FaBookmark size={33} />
                </div>
                <div className="likes">
                  <img src={eu} alt="" />
                  <p>
                    Curtido por <strong>breno.dmgd</strong> e{' '}
                    <strong> outras 300 pessoas</strong>
                  </p>
                </div>
                <div className="mainComments">
                  <div className="description">
                    <strong>breno.dmgd</strong>
                    <p>Que doidera cara!</p>
                  </div>
                  <div className="comment">
                    <div className="wrapper">
                      <strong>breno.dmgd</strong>
                      <p>Comentando essa beleza</p>
                    </div>
                    <FaHeart size={15} />
                  </div>
                  <div className="timepassed">há 1 hora</div>
                </div>
              </Comments>
              <div className="newComment">
                <input type="text" placeholder="Adicione um Comentário..." />
                <strong>Publicar</strong>
              </div>
            </div>
          </Post>
          <Post>
            <div className="DivFotos">
              <div className="title">
                <div className="perfilWrapper">
                  <img src={eu} alt="" />
                  <strong>breno.dmgd</strong>
                </div>
                <FaEllipsisH size={18} />
              </div>
              <img src={img2} alt="" />
              <Comments>
                <div className="actions">
                  <div className="actionWrapper">
                    <FaHeart size={33} />
                    <FaComment size={33} className="inverted" />
                    <FaPaperPlane size={33} />
                  </div>
                  <FaBookmark size={33} />
                </div>
                <div className="likes">
                  <img src={eu} alt="" />
                  <p>
                    Curtido por <strong>breno.dmgd</strong> e{' '}
                    <strong> outras 300 pessoas</strong>
                  </p>
                </div>
                <div className="mainComments">
                  <div className="description">
                    <strong>breno.dmgd</strong>
                    <p>Uma descrição normal</p>
                  </div>
                  <div className="comment">
                    <div className="wrapper">
                      <strong>breno.dmgd</strong>
                      <p>Que doidera cara!</p>
                    </div>
                    <FaHeart size={15} />
                  </div>
                  <div className="timepassed">há 1 hora</div>
                </div>
              </Comments>
              <div className="newComment">
                <input type="text" placeholder="Adicione um Comentário..." />
              </div>
            </div>
          </Post>
        </PostWrapper>
        <Widgets>
          <div className="perfil">
            <img src={eu} alt="" />
            <div className="description">
              <strong>breno.dmgd</strong>
              <small>Breno Luiz</small>
            </div>
          </div>
          <div className="stories">
            <div className="actions">
              <strong>Stories</strong>
              <strong>Ver tudo</strong>
            </div>
            <div className="storiesList">
              <Story>
                <img src={fernanda} alt="" />
                <div className="info">
                  <strong>ferrdepaula</strong>
                  <small>há 3 horas</small>
                </div>
              </Story>
              <Story>
                <img src={cicero} alt="" />
                <div className="info">
                  <strong>gabriel.cicer0</strong>
                  <small>há 5 horas</small>
                </div>
              </Story>
              <Story>
                <img src={tuco} alt="" />
                <div className="info">
                  <strong>barbosa_arthuro</strong>
                  <small>há 7 horas</small>
                </div>
              </Story>
              <Story>
                <img src={eu} alt="" />
                <div className="info">
                  <strong>breno.dmgd</strong>
                  <small>há 3 horas</small>
                </div>
              </Story>
              <Story>
                <img src={eu} alt="" />
                <div className="info">
                  <strong>breno.dmgd</strong>
                  <small>há 3 horas</small>
                </div>
              </Story>
            </div>
          </div>
          <div className="suggestions">
            <div className="actions">
              <p>Sugestões para você</p>
              <strong>Ver tudo</strong>
            </div>
            <div className="suggestionList">
              <Suggestion>
                <div className="suggestionWrapper">
                  <img src={eu} alt="" />
                  <div className="info">
                    <strong>breno.dmgd</strong>
                    <small>Novo no Instagram</small>
                  </div>
                </div>
                <strong>Seguir</strong>
              </Suggestion>
              <Suggestion>
                <div className="suggestionWrapper">
                  <img src={eu} alt="" />
                  <div className="info">
                    <strong>breno.dmgd</strong>
                    <small>Seguido por breno.dmgd + mais....</small>
                  </div>
                </div>
                <strong>Seguir</strong>
              </Suggestion>
              <Suggestion>
                <div className="suggestionWrapper">
                  <img src={eu} alt="" />
                  <div className="info">
                    <strong>breno.dmgd</strong>
                    <small>Segue você</small>
                  </div>
                </div>
                <strong>Seguir</strong>
              </Suggestion>
            </div>
          </div>
        </Widgets>
      </Wrapper>
    </Container>
  );
}

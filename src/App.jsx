import { useState } from "react";
import "./App.css";
import { Howl, Howler } from "howler";
import { gsap } from "gsap";
import { useEffect } from "react";
import TypeIt from "typeit-react";
import Confetti from "react-confetti-boom";
gsap.registerPlugin();

function App() {
  const [question, setQuestion] = useState(
    "Para abrir sua cartinha, digite o apelido do seu amor!"
  );

  const [instance, setIstance] = useState(null);
  const [boom, setBoom] = useState(false);
  const [confetti, setConfetti] = useState(false);


  const handleOpen = () => {
    let input = document.getElementById("senha");
    let value = input.value;
    if (value.toLowerCase() === "benzinho") {
      setBoom(true);
      const larguraTotal = window.innerWidth;
      let tl = gsap.timeline();

      tl.add([
        gsap.to(".card-inner", {
          rotateY: 0,
          duration: 1,
          ease: "power2.inOut",
        }),
        gsap.to("#open", {
          delay: 2,
          rotateX: 180,
          y: larguraTotal >= 768 ? -265 : -190,

          duration: 1,
          zIndex: 1,
          ease: "power2.inOut",
        }),
      ]);
      tl.add([
        gsap.to("#content", {
          y: -100,
          duration: 1,
          zIndex: 20,
          ease: "power2.inOut",
        }),
        gsap.to(".hearts:nth-child(1)", {
          y: -200,
          x: 200,
          opacity: 0,
          duration: 5,
          ease: "power2.inOut",
        }),
        gsap.to(".hearts:nth-child(2)", {
          y: -250,
          // x: 150,
          opacity: 0,
          duration: 5,
          ease: "power2.inOut",
        }),
        gsap.to(".hearts:nth-child(3)", {
          y: -800,
          x: -100,
          opacity: 0,
          duration: 5,
          ease: "power2.inOut",
        }),
        gsap.to(".hearts:nth-child(4)", {
          y: -500,
          x: -250,
          opacity: 0,
          duration: 5,
          ease: "power2.inOut",
        }),
        gsap.to(".hearts:nth-child(5)", {
          y: -1000,
          x: 250,
          opacity: 0,
          duration: 5,
          ease: "power2.inOut",
        }),
        gsap.to(".hearts:nth-child(6)", {
          y: -1000,
          x: 500,
          opacity: 0,
          duration: 5,
          ease: "power2.inOut",
        }),
      ]);
      tl.add([
        gsap.to("#content", {
          y: -800,
          duration: 1,
          height: "80vh",
          ease: "power2.inOut",
        }),
        gsap.to("#panel", {
          y: 800,
          duration: 1,
          ease: "power2.inOut",
        }),
      ]);
      tl.add([
        gsap.from("span", {
          opacity: 0,
          duration: 3,
          stagger: 0.3,
          ease: "power2.inOut",
        }),
        setConfetti(true),
      ]);
    } else {
      input.value = "";
      input.style.border = "2px solid red";

      instance.reset();
      setQuestion("Ops! Tente novamente! Digite o apelido do seu amor!");
      instance.go();
      let tl = gsap.timeline();
      tl.add([
        gsap.to("#heart", {
          scale: 1.5,
          rotate: 25,
          duration: 0.3,
          ease: "power2.inOut",
        }),
      ]);
      tl.add([
        gsap.to("#heart", {
          rotate: -25,
          duration: 0.3,
          ease: "power2.inOut",
        }),
      ]);
      tl.add([
        gsap.to("#heart", {
          scale: 1,
          rotate: 0,
          duration: 0.3,
          ease: "power2.inOut",
        }),
      ]);
    }
  };
  useEffect(() => {
    let content = document.getElementById("quote");
    let text = content.innerText;
    let textArray = text.split(" ");
    let newText = textArray.map((word) => {
      return `<span>${word}${word.endsWith(".") ? "<br/>" : ""}</span>`;
    });
    content.innerHTML = newText.join(" ");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center  bg-rose-100 w-screen min-h-screen overflow-hidden">
      {boom && <Confetti mode="boom" />}
      {confetti && <Confetti mode="fall" />}
      <div className="flex flex-col justify-center items-center card w-[80%] h-full">
        <div
          className="flex flex-col justify-center items-center w-full h-full card-inner"
          id="screen"
        >
          <div
            className="flex flex-col justify-center items-center h-[250px] md:h-[350px] md:w-[600px] bg-rose-400 rounded-2xl relative card-front"
            id="panel"
          >
            <div
              className="flex flex-col justify-start items-start w-[350px] md:w-[500px]  h-[80%] p-4 text-2xl md:text-3xl  rounded-2xl  font-(family-name:--main-font) text-rose-700 bg-rose-200 absolute overflow-hidden origin-bottom "
              id="content"
            >
              <p id="quote">
                Oi amorzinho, tudo bem gatinha?!.
                <br /> Fiz essa surpresinha pra você, espero que esteja dando
                tudo certo. <br />
                Fiz isso amorzinho pra te mostrar o quanto eu te amo e quero o
                seu bem minha princesa.
                <br /> Sei como esse dia e especial para você e se é importante
                pra você e duas vezes mais importante para mim.
                <br />
                Saiba que torço muito por você e por nós dois, quero fazer de
                tudo o possível para você conquistar seus sonhos amorzinho.{" "}
                <br />
                Porque o meu maior medo amo e ver você desistindo de algo que
                ama!! <br />
                Então lembre-se bem, que estou e estarei sempre com você. Te amo
                muito, com Amor seu Benzinho ❤️
              </p>
            </div>
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/color/48/filled-like.png"
              alt="filled-like"
              // id="heart"
              className="absolute top-40 left-1/2 -translate-x-1/2 z-20 hearts"
            />
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/color/48/filled-like.png"
              alt="filled-like"
              // id="heart"
              className="absolute top-40 left-1/2 -translate-x-1/2 opacity-50 z-20 hearts"
            />
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/color/48/filled-like.png"
              alt="filled-like"
              className="absolute top-40 left-1/2 -translate-x-1/2 opacity-90 z-20 hearts"
            />
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/color/48/filled-like.png"
              alt="filled-like"
              className="absolute top-40 left-1/2 -translate-x-1/2 opacity-70 z-20 hearts"
            />
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/color/48/filled-like.png"
              alt="filled-like"
              className="absolute top-40 left-1/2 -translate-x-1/2 opacity-100 z-20 hearts"
            />
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/color/48/filled-like.png"
              alt="filled-like"
              className="absolute top-40 left-1/2 -translate-x-1/2 opacity-100 z-20 hearts"
            />
            <div className="w-0 h-0 border-r-[400px]  border-b-[250px] border-b-rose-500 border-l-transparent border-r-transparent rounded-2xl z-20 md:border-r-[600px] md:border-b-[350px]"></div>
            <div
              className="w-0 h-0 border-l-[200px] border-r-[200px] border-t-[140px] md:border-l-[300px] md:border-r-[300px] md:border-t-[200px] md:-translate-y-[75px]  border-t-rose-400 border-l-transparent border-r-transparent  absolute rounded-2xl -translate-y-[38px] z-10"
              id="open"
            ></div>
            <div className="w-0 h-0 border-l-[400px]  border-b-[250px] md:border-l-[600px] md:border-b-[350px]  border-b-rose-500 border-l-transparent border-r-transparent z-20  translate-x- absolute rounded-2xl"></div>
            <div className="w-0 h-0 border-l-[200px] border-r-[200px] border-b-[140px]  border-b-rose-400 border-l-transparent border-r-transparent  absolute rounded-2xl translate-y-[55px] z-20 md:border-l-[300px] md:border-r-[300px] md:border-b-[200px] md:translate-y-[75px]"></div>
          </div>
          <div className="card-back w-[400px] h-[250px] md:w-[600px] md:h-[350px] ">
            <div className="flex flex-col justify-between items-center w-full h-full bg-rose-300 rounded-2xl ">
              <div className="flex  justify-center items-start  w-full h-full p-2">
                <div className="flex flex-col justify-start items-start gap-2 w-full h-full p-4">
                  <h2 className="text-rose-50 text-2xl font-(family-name:--main-font)">
                    <p className="font-bold font-(family-name:--secundary-font) inline">
                      From:
                    </p>{" "}
                    Uerik
                  </h2>
                  <h2 className="text-rose-50 text-2xl font-(family-name:--main-font)">
                    <p className="font-bold font-(family-name:--secundary-font) inline">
                      To:
                    </p>{" "}
                    Heloisa
                  </h2>
                </div>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/filled-like.png"
                  alt="filled-like"
                  id="heart"
                />
              </div>
              <div className="flex flex-col justify-center gap-2 items-center w-full h-full ">
                <label
                  htmlFor="senha"
                  className="text-rose-50 font-bold font-(family-name:--secundary-font)"
                >
                  <TypeIt
                    as="p"
                    options={{
                      speed: 25,
                      waitUntilVisible: true,
                      cursor: false,
                    }}
                    getAfterInit={(instance) => {
                      setIstance(instance);
                      return instance;
                    }}
                  >
                    {question}
                  </TypeIt>
                </label>
                <input
                  type="text"
                  placeholder="Apelido"
                  className="bg-rose-200 p-1 rounded-2xl text-center"
                  id="senha"
                  autoFocus={true}
                />
                <button
                  type="submit"
                  className="bg-rose-400 text-sm p-2 rounded-xl text-rose-50 font-bold font-(family-name:--secundary-font) scale-95 hover:scale-100 active:scale-75 transition-transform duration-300 cursor-pointer"
                  onClick={handleOpen}
                >
                  Abrir Cartinha!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

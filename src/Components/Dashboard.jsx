import React, { useEffect, useRef, useState } from 'react';
import "../Utils/Sass/dashboard.scss"
import ArchonHunt from './ArchonHunt';
import Sortie from './Sortie';
import Fissures from './Fissures';
import Syndicats from './Syndicats';

const Dashboard = () => {
  let root = document.documentElement;
  let theme = sessionStorage.getItem("theme");
  const [themeName, setThemeName] = useState("")
  const [Refresh, setRefresh] = useState(false)
  const [menu, setMenu] = useState(false)
  const Menu = useRef();

  const hideMenu = () => {
    setTimeout(() => {
      const Menu = document.querySelector("#Menu");
      const Options = document.querySelector("#Options");
      Menu.classList.remove("active");
      Menu.classList.add("hidden");
      Options.classList.add("active");
      Options.classList.remove("hidden");
      setTimeout(() => {
        Menu.classList.remove("activeBlock");
        Menu.classList.add("hiddenBlock");
      }, 500);
    }, 10);
  };
  const showMenu = () => {
    const Menu = document.querySelector("#Menu");
    const Options = document.querySelector("#Options");
    Menu.classList.remove("hiddenBlock");
    Menu.classList.add("activeBlock");
    setTimeout(() => {
      Menu.classList.remove("hidden");
      Menu.classList.add("active");
      Options.classList.remove("active");
      Options.classList.add("hidden");
    }, 10);
  };
  
  const ChangeTheme = (name) => {
    if (name === "Conquera") {
      sessionStorage.setItem("theme", name);
      root.style.setProperty('--active', "#f5e3ad");
      root.style.setProperty('--base', "#FFFFFF");
      root.style.setProperty('--typo', "#fddbed");
      root.style.setProperty('--backbase', "#fddbedB3");
      root.style.setProperty('--background', "#b33cb7");
    }
    if (name === "Contraste Elevé") {
      sessionStorage.setItem("theme", name);
      root.style.setProperty('--active', "#ffff00");
      root.style.setProperty('--base', "#027fd9");
      root.style.setProperty('--typo', "#cc5254");
      root.style.setProperty('--backbase', "#cc5254B3");
      root.style.setProperty('--background', "#13203b");
    }
    if (name === "Equinox") {
      sessionStorage.setItem("theme", name);
      root.style.setProperty('--active', "#e8e3e3");
      root.style.setProperty('--base', "#9e9fa7");
      root.style.setProperty('--typo', "#ffffff");
      root.style.setProperty('--backbase', "#ffffffB3");
      root.style.setProperty('--background', "#0b010a");
    }
    if (name === "Fortuna") {
      sessionStorage.setItem("theme", name);
      root.style.setProperty('--active', "#ff73e6");
      root.style.setProperty('--base', "#3969c0");
      root.style.setProperty('--typo', "#66aacc");
      root.style.setProperty('--backbase', "#66aaccB3");
      root.style.setProperty('--background', "#010612");
    }
    if (name === "Vitruvien") {
      sessionStorage.setItem("theme", name);  
      root.style.setProperty('--active', "#f5e3ad");
      root.style.setProperty('--base', "#FFFFFF");
      root.style.setProperty('--typo', "#bea966");
      root.style.setProperty('--backbase', "#efefef93");
      root.style.setProperty('--background', "#14131d");
    }
    if (name === "Zephyr Harrier") {
      sessionStorage.setItem("theme", name);
      root.style.setProperty('--active', "#FF3500");
      root.style.setProperty('--base', "#fd8402");
      root.style.setProperty('--typo', "#ffffff");
      root.style.setProperty('--backbase', "#ffffffB3");
      root.style.setProperty('--background', "#121b26");
    }
    if (name === "A l’Ancienne") {
      sessionStorage.setItem("theme", name);
      root.style.setProperty('--active', "#e8d55d");
      root.style.setProperty('--base', "#FFFFFF");
      root.style.setProperty('--typo', "#FFFFFF");
      root.style.setProperty('--backbase', "#FFFFFFB3");
      root.style.setProperty('--background', "#2c424f");
    }
    if (name === "Baruuk") {
      sessionStorage.setItem("theme", name);
      root.style.setProperty('--active', "#ecd3a2");
      root.style.setProperty('--base', "#eec169");
      root.style.setProperty('--typo', "#d4caa9");
      root.style.setProperty('--backbase', "#d4caa9B3");
      root.style.setProperty('--background', "#32302b");
    }
    if (name === "Corpus") {
      sessionStorage.setItem("theme", name);
      root.style.setProperty('--active', "#6fe5fd");
      root.style.setProperty('--base', "#23c9f5");
      root.style.setProperty('--typo', "#a7d6f8");
      root.style.setProperty('--backbase', "#a7d6f8B3");
      root.style.setProperty('--background', "#0c1724");
    }
    if (name === "Exclusion") {
      sessionStorage.setItem("theme", name);
      root.style.setProperty('--active', "#e5d56c");
      root.style.setProperty('--base', "#FFFFFF");
      root.style.setProperty('--typo', "#d5cbab");
      root.style.setProperty('--backbase', "#d5cbabB3");
      root.style.setProperty('--background', "#151f37");
    }
    if (name === "Grineer") {
      sessionStorage.setItem("theme", name);
      root.style.setProperty('--active', "#ffe099");
      root.style.setProperty('--base', "#ffbd66");
      root.style.setProperty('--typo', "#ffbd66");
      root.style.setProperty('--backbase', "#ffbd66B3");
      root.style.setProperty('--background', "#001715");
    }
    if (name === "Lotus") {
      sessionStorage.setItem("theme", name);
      root.style.setProperty('--active', "#fff1bf");
      root.style.setProperty('--base', "#24b8f2");
      root.style.setProperty('--typo', "#fff1bf");
      root.style.setProperty('--backbase', "#fff1bfB3");
      root.style.setProperty('--background', "#2d3859");
    }
    if (name === "Lotus Sombre") {
      sessionStorage.setItem("theme", name);
      root.style.setProperty('--active', "#c8a9ed");
      root.style.setProperty('--base', "#8c7793");
      root.style.setProperty('--typo', "#fff1bf");
      root.style.setProperty('--backbase', "#fff1bfB3");
      root.style.setProperty('--background', "#250952");
    }
    if (name === "Nidus") {
      sessionStorage.setItem("theme", name);
      root.style.setProperty('--active', "#f5495d");
      root.style.setProperty('--base', "#8c265c");
      root.style.setProperty('--typo', "#8c265c");
      root.style.setProperty('--backbase', "#8c265cB3");
      root.style.setProperty('--background', "#fffedb");
    }
    if (name === "Orokin") {
      sessionStorage.setItem("theme", name);
      root.style.setProperty('--active', "#b27d05");
      root.style.setProperty('--base', "#14291d");
      root.style.setProperty('--typo', "#514008");
      root.style.setProperty('--backbase', "#514008B3");
      root.style.setProperty('--background', "#f3fcfb");
    }
    if (name === "Stalker") {
      sessionStorage.setItem("theme", name);
      root.style.setProperty('--active', "#ff3d33");
      root.style.setProperty('--base', "#991f23");
      root.style.setProperty('--typo', "#991f23");
      root.style.setProperty('--backbase', "#991f23B3");
      root.style.setProperty('--background', "#050505");
    }
    if (name === "Tenno") {
      sessionStorage.setItem("theme", name);
      root.style.setProperty('--active', "#066d4a");
      root.style.setProperty('--base', "#094e6a");
      root.style.setProperty('--typo', "#0a4759");
      root.style.setProperty('--backbase', "#0a4759B3");
      root.style.setProperty('--background', "#cce9ea");
    }
    if (name === "Renouveau Lunaire") {
      sessionStorage.setItem("theme", name);
      root.style.setProperty('--active', "#cfb052");
      root.style.setProperty('--base', "#FFFFFF");
      root.style.setProperty('--typo', "#e8989b");
      root.style.setProperty('--backbase', "#e8989bB3");
      root.style.setProperty('--background', "#5c1417");
    }
  }

  if (theme === null) {
    sessionStorage.setItem("theme", "Vitruvien");
  }
  if (theme !== null) {
    ChangeTheme(theme)
  }
  if (menu) {
    showMenu();
  }
  if (!menu) {
    hideMenu();
  }

  useEffect(() => {
    let handler = (e) => {
      if (!Menu.current.contains(e.target)) {
        // Si le clic se trouve dans la zone du menu, il reste ouvert, sinon il se ferme
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handler); // Lance la fonction handler lors d'un  clic
  });

  return (
    <>
      <div id="Menu" ref={Menu} className="hidden hiddenBlock">
        <p id="menu">Menu</p>

        <p>
          Themes/&nbsp; <span>{themeName}</span>
        </p>
        <ul id="themes">
          <li
            onMouseEnter={() => {
              setThemeName("Conquera");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "Conquera" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("Conquera");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/ConqueraTheme.png" alt="" />
          </li>
          <li
            onMouseEnter={() => {
              setThemeName("Contraste Elevé");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "Contraste Elevé" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("Contraste Elevé");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/HighContrastTheme.png" alt="" />
          </li>
          <li
            onMouseEnter={() => {
              setThemeName("Equinox");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "Equinox" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("Equinox");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/EquinoxTheme.png" alt="" />
          </li>
          <li
            onMouseEnter={() => {
              setThemeName("Fortuna");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "Fortuna" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("Fortuna");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/FortunaTheme.png" alt="" />
          </li>
          <li
            onMouseEnter={() => {
              setThemeName("Vitruvien");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "Vitruvien" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("Vitruvien");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/VitruvianTheme.png" alt="" />
          </li>
          <li
            onMouseEnter={() => {
              setThemeName("Zephyr Harrier");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "Zephyr Harrier" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("Zephyr Harrier");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/ZephyrHarrierTheme.png" alt="" />
          </li>
          <li
            onMouseEnter={() => {
              setThemeName("A l’Ancienne");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "A l’Ancienne" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("A l’Ancienne");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/LegacyTheme.png" alt="" />
          </li>
          <li
            onMouseEnter={() => {
              setThemeName("Baruuk");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "Baruuk" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("Baruuk");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/BaruukTheme.png" alt="" />
          </li>
          <li
            onMouseEnter={() => {
              setThemeName("Corpus");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "Corpus" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("Corpus");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/CorpusTheme.png" alt="" />
          </li>
          <li
            onMouseEnter={() => {
              setThemeName("Exclusion");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "Exclusion" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("Exclusion");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/DeadlockTheme.png" alt="" />
          </li>
          <li
            onMouseEnter={() => {
              setThemeName("Grineer");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "Grineer" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("Grineer");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/GrineerTheme.png" alt="" />
          </li>
          <li
            onMouseEnter={() => {
              setThemeName("Lotus");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "Lotus" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("Lotus");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/LotusTheme.png" alt="" />
          </li>
          <li
            onMouseEnter={() => {
              setThemeName("Lotus Sombre");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "Lotus Sombre" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("Lotus Sombre");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/DarkLotusTheme.png" alt="" />
          </li>
          <li
            onMouseEnter={() => {
              setThemeName("Nidus");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "Nidus" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("Nidus");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/NidusTheme.png" alt="" />
          </li>
          <li
            onMouseEnter={() => {
              setThemeName("Orokin");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "Orokin" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("Orokin");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/OrokinTheme.png" alt="" />
          </li>
          <li
            onMouseEnter={() => {
              setThemeName("Stalker");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "Stalker" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("Stalker");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/StalkerTheme.png" alt="" />
          </li>
          <li
            onMouseEnter={() => {
              setThemeName("Tenno");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "Tenno" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("Tenno");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/TennoTheme.png" alt="" />
          </li>
          <li
            onMouseEnter={() => {
              setThemeName("Renouveau Lunaire");
            }}
            onMouseLeave={() => {
              setThemeName("");
            }}
            className={theme === "Renouveau Lunaire" ? "activeTheme" : ""}
            onClick={() => {
              ChangeTheme("Renouveau Lunaire");
              setRefresh(!Refresh);
            }}
          >
            <img src="./Icons/LunarRenewalTheme.png" alt="" />
          </li>
        </ul>

        <p>Content</p>
      </div>

      <div id="Container">
        <div id="Options" className='rotating' onClick={()=>{setMenu(!menu);}}>
          <svg
            width="49"
            height="50"
            viewBox="0 0 49 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.3233 33.75C22.0027 33.75 19.7771 32.8281 18.1361 31.1872C16.4952 29.5462 15.5733 27.3206 15.5733 25C15.5733 22.6794 16.4952 20.4538 18.1361 18.8128C19.7771 17.1719 22.0027 16.25 24.3233 16.25C26.644 16.25 28.8696 17.1719 30.5105 18.8128C32.1515 20.4538 33.0733 22.6794 33.0733 25C33.0733 27.3206 32.1515 29.5462 30.5105 31.1872C28.8696 32.8281 26.644 33.75 24.3233 33.75ZM42.8983 27.425C42.9983 26.625 43.0733 25.825 43.0733 25C43.0733 24.175 42.9983 23.35 42.8983 22.5L48.1733 18.425C48.6483 18.05 48.7733 17.375 48.4733 16.825L43.4733 8.175C43.1733 7.625 42.4983 7.4 41.9483 7.625L35.7233 10.125C34.4233 9.15 33.0733 8.3 31.4983 7.675L30.5733 1.05C30.5225 0.755547 30.3692 0.488572 30.1404 0.296383C29.9116 0.104195 29.6221 -0.000799436 29.3233 4.58367e-06H19.3233C18.6983 4.58367e-06 18.1733 0.450005 18.0733 1.05L17.1483 7.675C15.5733 8.3 14.2233 9.15 12.9233 10.125L6.69833 7.625C6.14833 7.4 5.47333 7.625 5.17333 8.175L0.173329 16.825C-0.151671 17.375 -0.00167076 18.05 0.473329 18.425L5.74833 22.5C5.64833 23.35 5.57333 24.175 5.57333 25C5.57333 25.825 5.64833 26.625 5.74833 27.425L0.473329 31.575C-0.00167076 31.95 -0.151671 32.625 0.173329 33.175L5.17333 41.825C5.47333 42.375 6.14833 42.575 6.69833 42.375L12.9233 39.85C14.2233 40.85 15.5733 41.7 17.1483 42.325L18.0733 48.95C18.1733 49.55 18.6983 50 19.3233 50H29.3233C29.9483 50 30.4733 49.55 30.5733 48.95L31.4983 42.325C33.0733 41.675 34.4233 40.85 35.7233 39.85L41.9483 42.375C42.4983 42.575 43.1733 42.375 43.4733 41.825L48.4733 33.175C48.7733 32.625 48.6483 31.95 48.1733 31.575L42.8983 27.425Z"
              fill="#1B1B19"
            />
          </svg>
        </div>
          <ArchonHunt/>
          <Sortie/>
          <Fissures/>
          <Syndicats/>
      </div>
    </>
  );
};

export default Dashboard;
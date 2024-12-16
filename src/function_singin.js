function INGRESO() {
  return (
    <Frame
      name="INGRESO"
      fill="#FFF"
      cornerRadius={32}
      width={375}
      height={812}
    >
      <Frame
        name="Group 2"
        effect={{
          type: "drop-shadow",
          color: "#0000000D",
          offset: {
            x: 0,
            y: 4,
          },
          blur: 4,
        }}
        x={13}
        y={238}
        width={343}
        height={48}
      >
        <Rectangle
          name="Rectangle"
          effect={{
            type: "drop-shadow",
            color:
              "#0000000F",
            offset: {
              x: 0,
              y: 2,
            },
            blur: 12,
          }}
          x={{
            type: "horizontal-scale",
            leftOffsetPercent: 0,
            rightOffsetPercent: 0,
          }}
          y={{
            type: "vertical-scale",
            topOffsetPercent: 0,
            bottomOffsetPercent: 0,
          }}
          fill="#FFF"
          cornerRadius={10}
          strokeWidth={0}
          strokeAlign="center"
          width={343}
          height={48}
        />
        <Text
          name="Enter your email"
          x={{
            type: "horizontal-scale",
            leftOffsetPercent: 4.665,
            rightOffsetPercent: 38.192,
          }}
          y={{
            type: "center",
            offset: -1,
          }}
          fill="#3C3C4399"
          lineHeight={20}
          fontSize={15}
          letterSpacing={
            -0.24
          }
          strokeWidth={0}
          strokeAlign="center"
        >
          Introduce el correo
          electronico{" "}
        </Text>
      </Frame>
      <Frame
        name="Group 2"
        effect={{
          type: "drop-shadow",
          color: "#0000000D",
          offset: {
            x: 0,
            y: 4,
          },
          blur: 4,
        }}
        x={15}
        y={319}
        width={343}
        height={48}
      >
        <Rectangle
          name="Rectangle"
          effect={{
            type: "drop-shadow",
            color:
              "#0000000F",
            offset: {
              x: 0,
              y: 2,
            },
            blur: 12,
          }}
          x={{
            type: "horizontal-scale",
            leftOffsetPercent: 0,
            rightOffsetPercent: 0,
          }}
          y={{
            type: "vertical-scale",
            topOffsetPercent: 0,
            bottomOffsetPercent: 0,
          }}
          fill="#FFF"
          cornerRadius={10}
          strokeWidth={0}
          strokeAlign="center"
          width={343}
          height={48}
        />
        <Text
          name="Enter password"
          x={{
            type: "horizontal-scale",
            leftOffsetPercent: 4.665,
            rightOffsetPercent: 50.729,
          }}
          y={{
            type: "center",
            offset: -1,
          }}
          fill="#3C3C4399"
          lineHeight={20}
          fontSize={15}
          letterSpacing={
            -0.24
          }
          strokeWidth={0}
          strokeAlign="center"
        >
          Introduce la
          contraseña
        </Text>
        <Image
          name="image 9"
          x={296}
          y={9}
          width={30}
          height={30}
          src="<Add image URL here>"
        />
      </Frame>
      <Frame
        name="iPhone X/Status Bars/Status Bar (White)"
        x={{
          type: "horizontal-scale",
          leftOffsetPercent: 0,
          rightOffsetPercent: 0,
        }}
        y={{
          type: "vertical-scale",
          topOffsetPercent: 0,
          bottomOffsetPercent: 94.581,
        }}
        overflow="visible"
        width={375}
        height={44}
      >
        <Frame
          name="iPhone X/Status Bars/Status Bar (Black)"
          x={{
            type: "center",
            offset: 0,
          }}
          y={{
            type: "center",
            offset: 0,
          }}
          width={375}
          height={44}
        >
          <Rectangle
            name="Rectangle"
            x={{
              type: "horizontal-scale",
              leftOffsetPercent: 0,
              rightOffsetPercent: 0,
            }}
            y={{
              type: "vertical-scale",
              topOffsetPercent: 0,
              bottomOffsetPercent: 0,
            }}
            strokeWidth={0}
            strokeAlign="center"
            width={375}
            height={44}
          />
          <Frame
            name="Battery"
            x={{
              type: "right",
              offset: 14.672,
            }}
            y={17.333}
            strokeWidth={0}
            overflow="visible"
            width={24.328}
            height={11.333}
          >
            <Rectangle
              name="Border"
              opacity={0.35}
              x={{
                type: "right",
                offset: 2.328,
              }}
              stroke="#000"
              cornerRadius={
                2.6666667461395264
              }
              width={22}
              height={11.333}
            />
            <SVG
              name="Cap"
              opacity={0.4}
              x={{
                type: "right",
                offset: 0,
              }}
              y={3.667}
              height={4}
              width={1}
              src="<svg width='2' height='4' viewBox='0 0 2 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path opacity='0.4' d='M0 0V4C0.804731 3.66122 1.32804 2.87313 1.32804 2C1.32804 1.12687 0.804731 0.338777 0 0Z' fill='black'/>
</svg>
"
            />
            <Rectangle
              name="Capacity"
              x={{
                type: "right",
                offset: 4.328,
              }}
              y={2}
              fill="#000"
              cornerRadius={
                1.3333333730697632
              }
              strokeWidth={0}
              strokeAlign="center"
              width={18}
              height={7.333}
            />
          </Frame>
          <SVG
            name="Wifi"
            x={315.694}
            y={17.331}
            height={11}
            width={15}
            src="<svg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M8.33033 2.60802C10.5462 2.60811 12.6774 3.45955 14.2833 4.98635C14.4043 5.10422 14.5976 5.10274 14.7167 4.98302L15.8727 3.81635C15.933 3.75563 15.9666 3.67338 15.9661 3.58779C15.9656 3.50221 15.931 3.42036 15.87 3.36035C11.6549 -0.679198 5.0051 -0.679198 0.789998 3.36035C0.728939 3.42032 0.694296 3.50215 0.693733 3.58773C0.69317 3.67331 0.726734 3.75558 0.786998 3.81635L1.94333 4.98302C2.06236 5.10292 2.25581 5.10441 2.37666 4.98635C3.98282 3.45945 6.11422 2.60801 8.33033 2.60802ZM8.33033 6.40368C9.54782 6.40361 10.7219 6.85614 11.6243 7.67335C11.7464 7.78933 11.9387 7.78682 12.0577 7.66768L13.2123 6.50102C13.2731 6.43982 13.3069 6.3568 13.306 6.27054C13.3051 6.18427 13.2697 6.10196 13.2077 6.04202C10.4595 3.48563 6.20353 3.48563 3.45533 6.04202C3.39325 6.10196 3.35784 6.18432 3.35702 6.27061C3.35621 6.3569 3.39006 6.43991 3.451 6.50102L4.60533 7.66768C4.72432 7.78682 4.9166 7.78933 5.03866 7.67335C5.94054 6.85668 7.11365 6.40419 8.33033 6.40368ZM10.6433 8.9575C10.6451 9.04401 10.6111 9.12741 10.5493 9.18802L8.552 11.2037C8.49345 11.2629 8.41362 11.2963 8.33033 11.2963C8.24704 11.2963 8.16722 11.2629 8.10866 11.2037L6.111 9.18802C6.04929 9.12737 6.01534 9.04394 6.01717 8.95743C6.019 8.87092 6.05644 8.789 6.12067 8.73102C7.39624 7.65213 9.26443 7.65213 10.54 8.73102C10.6042 8.78905 10.6416 8.87099 10.6433 8.9575Z' fill='black'/>
</svg>
"
          />
          <SVG
            name="Cellular Connection"
            x={293.667}
            y={17.667}
            height={11}
            width={17}
            src="<svg width='18' height='12' viewBox='0 0 18 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M16.6666 0.666656H15.6666C15.1143 0.666656 14.6666 1.11437 14.6666 1.66666V10.3333C14.6666 10.8856 15.1143 11.3333 15.6666 11.3333H16.6666C17.2189 11.3333 17.6666 10.8856 17.6666 10.3333V1.66666C17.6666 1.11437 17.2189 0.666656 16.6666 0.666656ZM11 2.99999H12C12.5522 2.99999 13 3.44771 13 3.99999V10.3333C13 10.8856 12.5522 11.3333 12 11.3333H11C10.4477 11.3333 9.99996 10.8856 9.99996 10.3333V3.99999C9.99996 3.44771 10.4477 2.99999 11 2.99999ZM7.33329 5.33332H6.33329C5.78101 5.33332 5.33329 5.78104 5.33329 6.33332V10.3333C5.33329 10.8856 5.78101 11.3333 6.33329 11.3333H7.33329C7.88558 11.3333 8.33329 10.8856 8.33329 10.3333V6.33332C8.33329 5.78104 7.88558 5.33332 7.33329 5.33332ZM2.66663 7.33332H1.66663C1.11434 7.33332 0.666626 7.78104 0.666626 8.33332V10.3333C0.666626 10.8856 1.11434 11.3333 1.66663 11.3333H2.66663C3.21891 11.3333 3.66663 10.8856 3.66663 10.3333V8.33332C3.66663 7.78104 3.21891 7.33332 2.66663 7.33332Z' fill='black'/>
</svg>
"
          />
          <Frame
            name="Time Style"
            x={21}
            y={13}
            overflow="visible"
            width={54}
            height={21}
          >
            <Text
              name="↳ Time"
              y={{
                type: "center",
                offset: 0.5,
              }}
              fill="#000"
              width={54}
              horizontalAlignText="center"
              fontSize={14}
              letterSpacing={
                -0.28
              }
              fontWeight={900}
              strokeWidth={0}
              strokeAlign="center"
            >
              9:4 1
            </Text>
          </Frame>
        </Frame>
      </Frame>
      <Frame
        name="Group 4"
        x={13}
        y={454}
        width={343}
        height={40}
      >
        <Rectangle
          name="Rectangle"
          x={{
            type: "horizontal-scale",
            leftOffsetPercent: 0,
            rightOffsetPercent: 0,
          }}
          y={{
            type: "vertical-scale",
            topOffsetPercent: 0,
            bottomOffsetPercent: 0,
          }}
          fill="#979797"
          cornerRadius={10}
          strokeWidth={0}
          strokeAlign="center"
          width={343}
          height={40}
        />
        <Text
          name="Register"
          x={{
            type: "horizontal-scale",
            leftOffsetPercent: 37.901,
            rightOffsetPercent: 37.609,
          }}
          y={{
            type: "center",
            offset: 0,
          }}
          fill="#FFF"
          width={84}
          horizontalAlignText="center"
          lineHeight={20}
          fontSize={15}
          letterSpacing={
            -0.24
          }
          fontWeight={900}
          strokeWidth={0}
          strokeAlign="center"
        >
          INGRESAR{" "}
        </Text>
      </Frame>
      <Frame
        name="Group 4"
        x={13}
        y={515}
        stroke="#0000004D"
        width={343}
        height={40}
      >
        <Rectangle
          name="Rectangle"
          x={{
            type: "horizontal-scale",
            leftOffsetPercent: 0,
            rightOffsetPercent: 0,
          }}
          y={{
            type: "vertical-scale",
            topOffsetPercent: 0,
            bottomOffsetPercent: 0,
          }}
          stroke="#EBEEF5"
          cornerRadius={10}
          width={343}
          height={40}
        />
        <Text
          name="Sign up with Google"
          x={{
            type: "horizontal-scale",
            leftOffsetPercent: 29.155,
            rightOffsetPercent: 29.446,
          }}
          y={{
            type: "center",
            offset: 1,
          }}
          fill="#000"
          lineHeight={20}
          fontSize={15}
          letterSpacing={
            -0.24
          }
          fontWeight={700}
          strokeWidth={0}
          strokeAlign="center"
        >
          Continuar con Google
        </Text>
        <Frame
          name="search-2"
          x={{
            type: "horizontal-scale",
            leftOffsetPercent: 4.665,
            rightOffsetPercent: 90.671,
          }}
          y={{
            type: "vertical-scale",
            topOffsetPercent: 32.5,
            bottomOffsetPercent: 27.5,
          }}
          strokeWidth={0}
          overflow="visible"
          width={16}
          height={16}
        >
          <SVG
            name="Path_Path_Path_Path"
            height={16}
            width={16}
            src="<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M3.54594 9.669L2.989 11.7481L0.953406 11.7912C0.345063 10.6628 0 9.37188 0 8C0 6.67341 0.322625 5.42241 0.8945 4.32088H0.894938L2.70719 4.65313L3.50106 6.4545C3.33491 6.93891 3.24434 7.45891 3.24434 8C3.24441 8.58725 3.35078 9.14991 3.54594 9.669Z' fill='#FBBB00'/>
<path fill-rule='evenodd' clip-rule='evenodd' d='M15.8602 6.5055C15.9521 6.98944 16 7.48922 16 8C16 8.57275 15.9398 9.13144 15.8251 9.67034C15.4357 11.5042 14.4181 13.1055 13.0084 14.2387L13.008 14.2383L10.7253 14.1218L10.4023 12.1051C11.3377 11.5565 12.0687 10.698 12.4537 9.67034H8.1759V6.5055H12.5161H15.8602Z' fill='#518EF8'/>
<path fill-rule='evenodd' clip-rule='evenodd' d='M13.0079 14.2382L13.0084 14.2387C11.6374 15.3407 9.89584 16 8.00002 16C4.95343 16 2.30465 14.2972 0.95343 11.7912L3.54596 9.66903C4.22156 11.4721 5.9609 12.7556 8.00002 12.7556C8.87649 12.7556 9.69762 12.5187 10.4022 12.1051L13.0079 14.2382Z' fill='#28B446'/>
<path fill-rule='evenodd' clip-rule='evenodd' d='M13.1063 1.84175L10.5147 3.9635C9.78547 3.50769 8.92347 3.24437 7.99997 3.24437C5.91469 3.24437 4.14281 4.58678 3.50106 6.4545L0.894908 4.32088H0.89447C2.22591 1.75384 4.9081 0 7.99997 0C9.94106 0 11.7208 0.691437 13.1063 1.84175Z' fill='#F14336'/>
</svg>
"
          />
        </Frame>
      </Frame>
      <Frame
        name="Group 3"
        x={13}
        y={576}
        stroke="#0000004D"
        width={343}
        height={40}
      >
        <Text
          name="Login with Facebook"
          x={{
            type: "horizontal-scale",
            leftOffsetPercent: 28.571,
            rightOffsetPercent: 25.073,
          }}
          y={{
            type: "center",
            offset: -2,
          }}
          fill="#000"
          lineHeight={20}
          fontSize={15}
          letterSpacing={
            -0.24
          }
          fontWeight={700}
          strokeWidth={0}
          strokeAlign="center"
        >
          Continuar con
          Facebook
        </Text>
        <Rectangle
          name="Rectangle"
          x={{
            type: "horizontal-scale",
            leftOffsetPercent: 0,
            rightOffsetPercent: 0,
          }}
          y={{
            type: "vertical-scale",
            topOffsetPercent: 0,
            bottomOffsetPercent: 0,
          }}
          stroke="#EBEEF5"
          cornerRadius={10}
          width={343}
          height={40}
        />
        <Frame
          name="facebook"
          x={{
            type: "horizontal-scale",
            leftOffsetPercent: 4.665,
            rightOffsetPercent: 90.673,
          }}
          y={{
            type: "vertical-scale",
            topOffsetPercent: 30,
            bottomOffsetPercent: 30.021,
          }}
          strokeWidth={0}
          overflow="visible"
          width={15.992}
          height={15.992}
        >
          <SVG
            name="Path"
            x={{
              type: "horizontal-scale",
              leftOffsetPercent: 0,
              rightOffsetPercent: 0,
            }}
            y={{
              type: "vertical-scale",
              topOffsetPercent: 0,
              bottomOffsetPercent: 0,
            }}
            height={16}
            width={16}
            src="<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M13.8367 0H2.15498C0.964873 0 6.10352e-05 0.964773 6.10352e-05 2.15491V13.8367C6.10352e-05 15.0269 0.964834 15.9916 2.15498 15.9916H7.91634L7.92616 10.2771H6.44153C6.24859 10.2771 6.09199 10.1211 6.09125 9.92814L6.08413 8.0861C6.08339 7.89211 6.24045 7.73445 6.43445 7.73445H7.91638V5.95458C7.91638 3.88906 9.17788 2.76436 11.0205 2.76436H12.5324C12.7259 2.76436 12.8828 2.92119 12.8828 3.11468V4.66789C12.8828 4.8613 12.726 5.01809 12.5326 5.01821L11.6048 5.01864C10.6027 5.01864 10.4087 5.49481 10.4087 6.1936V7.73449H12.6105C12.8203 7.73449 12.9831 7.91769 12.9584 8.12604L12.7401 9.96808C12.7192 10.1444 12.5697 10.2772 12.3922 10.2772H10.4185L10.4087 15.9917H13.8368C15.0269 15.9917 15.9917 15.0269 15.9917 13.8368V2.15491C15.9916 0.964773 15.0268 0 13.8367 0Z' fill='#475993'/>
</svg>
"
          />
        </Frame>
      </Frame>
      <Text
        name="¿Olvidaste tu contraseña?"
        x={193}
        y={386}
        fill="#000"
        width={204}
        height={20}
        lineHeight={20}
        fontSize={15}
        letterSpacing={-0.24}
      >
        ¿Olvidaste tu
        contraseña?
      </Text>
      <Text
        name="Recordar"
        x={63}
        y={386}
        fill="#000"
        width={82}
        height={16}
        lineHeight={20}
        fontSize={15}
        letterSpacing={-0.24}
      >
        Recordar
      </Text>
      <Image
        name="image 10"
        x={29}
        y={380}
        width={26}
        height={26}
        src="<Add image URL here>"
      />
      <Image
        name="image 8"
        x={152}
        y={102}
        cornerRadius={1}
        width={69}
        height={78}
        src="<Add image URL here>"
      />
      <Frame
        name="Group 6"
        x={95}
        y={635}
        width={197}
        height={18}
      >
        <Text
          name="Already have an acco"
          x={{
            type: "horizontal-scale",
            leftOffsetPercent: 0,
            rightOffsetPercent: 35.533,
          }}
          y={{
            type: "center",
            offset: 0,
          }}
          fill="#979797"
          lineHeight={18}
          fontSize={13}
          letterSpacing={
            -0.078
          }
          strokeWidth={0}
          strokeAlign="center"
        >
          No tienes una
          cuenta?
        </Text>
        <Text
          name="Login"
          x={{
            type: "horizontal-scale",
            leftOffsetPercent: 74.112,
            rightOffsetPercent:
              -6.599,
          }}
          y={{
            type: "center",
            offset: 0,
          }}
          fill="#000"
          width={64}
          lineHeight={18}
          fontSize={13}
          letterSpacing={
            -0.078
          }
          strokeWidth={0}
          strokeAlign="center"
        >
          Registrar
        </Text>
      </Frame>
      <Text
        name="Privacy Policy"
        x={{
          type: "center",
          offset: 16,
        }}
        y={767}
        fill="#000"
        width={103}
        height={19}
        lineHeight={18}
        fontSize={13}
        letterSpacing={-0.078}
      >
        Privacy Policy
      </Text>
      <Image
        name="image 9"
        x={120}
        y={766}
        width={24.375}
        height={20}
        src="<Add image URL here>"
      />
    </Frame>
  );
}


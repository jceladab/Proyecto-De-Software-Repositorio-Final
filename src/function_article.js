function ARTICULO() {
  return (
    <Frame
      name="ARTICULO"
      fill="#F5F7FA"
      cornerRadius={32}
      width={382}
      height={818}
    >
      <Image
        name="image 2"
        width={396}
        height={535}
        src="<Add image URL here>"
      />
      <Frame
        name="iPhone X/Status Bars/Status Bar (Black)"
        x={{
          type: "left-right",
          leftOffset: 0,
          rightOffset: 0,
        }}
        overflow="visible"
        width={382}
        height={44}
      >
        <Frame
          name="iPhone X/Status Bars/Status Bar (Black)"
          x={{
            type: "center",
            offset: -0.5,
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
      <Rectangle
        name="Rectangle 323"
        x={11}
        y={733}
        fill="#000"
        cornerRadius={10}
        width={366}
        height={49}
      />
      <Text
        name="Añadir"
        x={112}
        y={746}
        fill="#F5F5F5"
        width={158}
        height={64}
        horizontalAlignText="center"
        fontFamily="Gowun Dodum"
        fontSize={14}
      >
        Añadir
      </Text>
      <Image
        name="Rectangle 6"
        x={-1712}
        y={2102}
        cornerRadius={4}
        width={122}
        height={101}
        src="<Add image URL here>"
      />
      <Rectangle
        name="Home Indicator"
        x={{
          type: "center",
          offset: 0,
        }}
        y={{
          type: "bottom",
          offset: 3,
        }}
        fill="#272727"
        cornerRadius={100}
        strokeWidth={0}
        strokeAlign="center"
        width={134}
        height={5}
      />
      <Text
        name="SOMBRERO TRADICIONAL VUELTIAO."
        effect={[
          {
            type: "drop-shadow",
            color:
              "#0C0C0D0D",
            offset: {
              x: 0,
              y: 1,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          },
          {
            type: "drop-shadow",
            color:
              "#0C0C0D1A",
            offset: {
              x: 0,
              y: 1,
            },
            blur: 4,
            showShadowBehindNode:
              false,
          },
        ]}
        x={11}
        y={565}
        fill="#000"
        width={237}
        height={44}
        horizontalAlignText="justified"
        fontFamily="Gowun Dodum"
        fontSize={13}
      >
        SOMBRERO TRADICIONAL
        VUELTIAO.
      </Text>
      <Text
        name="Bicolor"
        x={277}
        y={685}
        fill="#000"
        width={90}
        height={23}
        horizontalAlignText="center"
        fontFamily="Gowun Dodum"
      >
        Bicolor
      </Text>
      <Text
        name="$350.000"
        x={297}
        y={565}
        fill="#000"
        width={71}
        height={22}
        horizontalAlignText="center"
        fontFamily="Gowun Dodum"
      >
        $350.000
      </Text>
      <Text
        name="$295.000"
        x={298}
        y={586}
        fill="#C8414B"
        width={69}
        height={23}
        horizontalAlignText="center"
        fontFamily="Gowun Dodum"
      >
        $295.000
      </Text>
      <Ellipse
        name="Ellipse 1"
        x={20}
        y={682}
        fill="#000"
        stroke="#000"
        width={26}
        height={26}
      />
      <Ellipse
        name="Ellipse 2"
        x={18}
        y={680}
        stroke="#000"
        width={30}
        height={30}
      />
      <Frame
        name="Mask group"
        x={20}
        y={682}
        strokeWidth={0}
        overflow="visible"
        width={26}
        height={26}
      >
        <Ellipse
          name="Ellipse 4"
          fill="#E1BD72"
          width={26}
          height={26}
        />
        <Rectangle
          name="Rectangle 327"
          x={13}
          fill="#D9BD61"
          width={13}
          height={26}
        />
      </Frame>
      <Frame
        name="Una obra con tejido hecho a mano con fibras de caña flecha, este diseño se caracteriza por su suavidad, ligereza, y durabilidad."
        x={14}
        y={590}
        overflow="visible"
        width={211}
        height={70}
      >
        <Text
          name="Una obra con tejido hecho a mano con fibras de caña flecha, este diseño se caracteriza por su suavidad, ligereza, y durabilidad."
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
          fill="#000"
          width={211}
          height={70}
          horizontalAlignText="justified"
          fontFamily="Gowun Dodum"
          fontSize={12}
        >
          Una obra con tejido
          hecho a mano con
          fibras de caña
          flecha, este diseño
          se caracteriza por
          su suavidad,
          ligereza, y
          durabilidad.
        </Text>
      </Frame>
    </Frame>
  );
}
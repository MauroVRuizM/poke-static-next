import { useTheme, Text, Spacer, Image } from "@nextui-org/react";

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            alignItems: 'center',
            backgroundColor: theme?.colors.gray100.value,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            padding: '0px 20px',
            width: '100%',
        }}>

            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                alt='Icono App'
                width={70}
                height={70}
            />

            <Text color="white" h2>P</Text>
            <Text color="white" h3>okemon</Text>

            <Spacer css={{ flex: 1 }}/>

            <Text color="white">Favoritos</Text>
        </div>
    )
}

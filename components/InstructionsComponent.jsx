import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					Criado e editado por <span> DAVID ALMEIDA</span>
				</h1>
				<p>
					AQUI PARA EDITAR PAGINA{" "}
					<span>/pages/index.js</span>
				</p>
			</header>

			
			
		<img src="netlify-alchemy/public/desktop_1280x800_PNG.png" width={"1280px"} height={"800px"} />
		
					
			
			<div className={styles.footer}>
				<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
					<img
						id="badge-button"
						style={{ width: "240px", height: "53px" }}
						src="https://static.alchemyapi.io/images/marketing/badgeLight.png"
						alt="Alchemy Supercharged"
					/>
				</a>
				<div className={styles.icons_container}>
					<div>
						<a
							href="https://www.facebook.com/ligceluba/"
							target={"_blank"}
						>
							Estamos no Facebook
						</a>
					</div>
					<div>
						<a
							href="https://https://www.instagram.com/ligcel/"
							target={"_blank"}
						>
							Siga no instagram
						</a>
					</div>
					<div>
						<a
							href="https://https://whats.link/ligcel"
							target={"_blank"}
						>
							Entre em contato pelo Whatsapp
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

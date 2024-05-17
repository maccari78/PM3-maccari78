import schedule from '../../assets/schedule.png'
import styles from './ImgText.module.css'

export default function ImgText() {
    return (
        <div className={styles.imgtextContainer}>
            <img src={schedule} alt="schedule" />
            <div>
                <h1>¡Bienvenido a Sonrisas Radiantes!</h1>

                En Sonrisas Radiantes, nos dedicamos a proporcionar atención odontológica de alta calidad para toda la familia. Nuestro equipo de expertos en odontología está comprometido con tu salud bucal y tu bienestar general.

                <h2>Nuestros Servicios:</h2>
                <ul><li>
                    Limpieza Dental Profesional: Nuestros higienistas dentales altamente capacitados realizarán una limpieza dental completa para eliminar la placa y el sarro, dejando tus dientes limpios y brillantes.</li>
                    <li>
                        Tratamientos de Blanqueamiento Dental: ¿Deseas una sonrisa más blanca y brillante? Ofrecemos tratamientos de blanqueamiento dental seguros y efectivos para que puedas lucir una sonrisa radiante.</li>
                    <li>
                        Exámenes Dentales Preventivos: Realizamos exámenes dentales completos y radiografías para detectar y prevenir problemas dentales antes de que se conviertan en algo más serio.</li>
                    <li>
                        Tratamientos de Restauración Dental: Desde empastes dentales hasta coronas y puentes, ofrecemos una amplia gama de tratamientos de restauración dental para reparar dientes dañados o perdidos.</li>
                </ul>
                Nuestro Compromiso:

                En Sonrisas Radiantes, nos esforzamos por brindar una experiencia dental cómoda y libre de estrés para todos nuestros pacientes. Nuestro equipo amable y compasivo está aquí para responder a todas tus preguntas y asegurarse de que te sientas completamente cómodo durante tu visita.

                ¡Programa una cita con nosotros hoy mismo y comienza tu camino hacia una sonrisa más saludable y radiante!
            </div>
        </div>
    )
}
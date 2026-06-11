import Layout from "../Layout.jsx";
import { motion } from "framer-motion";
import Accordion from "../component/Accodation.jsx";

const experiencia = [
    {
        job: "Full-Stack",
        company: "Comptroller's Office of the State of Jalisco",
        imgCompany:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlz5UW2m-cAoo91fE_1yw1UqDfYpSDkd3zyg&s",
        date: "May 2026 – Present",
        tech: [
            "ReactJS",
            "PrimeReact",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
            "GitLab",
            "ExpressJS",
        ],
        description:
            "Development and maintenance of web applications, as well as integration of frontend and backend functionalities focused on performance and user experience. Management and development of CMS-based solutions, including website customization and maintenance. Design, administration, and optimization of relational and non-relational databases using SQL, PostgreSQL, and MongoDB. Participation in modern web development projects, technical problem-solving, implementation of new features, and collaboration within teams focused on continuous improvement and learning new technologies.",
        color: "bg-green-500",
    },
    {
        job: "Web Developer Intern",
        company: "DEXTRA ELECTRONIC",
        imgCompany:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCuHl8n7TAodRab70jMzo7APgcEJLpEgqJg&s",
        date: "Oct 2024 – May 2026",
        tech: [
            "Laravel",
            "MySQL",
            "PHP",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
            "CPanel",
            "Joomla",
            "Laragon",
        ],
        description:
            "Manage and optimize a Laravel/MySQL e-commerce platform, implementing secure authentication, inventory management, customer–employee interaction features, and database optimizations, while developing custom plugins to meet evolving business needs.",
        plus: [
            {
                top: "Dragon Group, Mexico City",
                description:
                    "Develop an automated broadcasting workflow using MUSE Automator (Node.js), streamlining audio/video scene management, reducing manual intervention, and ensuring precise, client-specified playback.",
                image: {
                    img: "myPhotos/GroupDragon.jpg",
                    imgAlt: "Dragon Group",
                },
            },
        ],
        color: "bg-orange-500",
    },

];

export default function Experience() {
    return (
        // dark:from-gray-900 dark:to-gray-950 dark:text-gray-100
        <Layout className="bg-gradient-to-b from-gray-800 to-white">
            <div className="max-w-4xl mx-auto px-6 pt-25 pb-16 animate-fade-in">
                <h2 className="text-3xl font-bold text-center mb-12 transition-all duration-400 hover:scale-[1.18]">Work Experience</h2>

{/* dark:border-gray-700 */}
                <div className="relative border-l-2 border-gray-300">
                    {experiencia.map((item, index) => (
                        <motion.div
                            key={index}
                            className="mb-12 ml-6 relative group"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            {/* Punto de la línea */}
                            <span
                                className={`absolute w-4 h-4 ${item.color} rounded-full -left-8 top-3 ring-2 ring-white dark:ring-gray-900 group-hover:scale-125 transition-transform`}
                            ></span>

                            {/* Card */}
                            {/* dark:border-gray-700  dark:bg-gray-800/60 */}
                            <div className="backdrop-blur-md bg-blue-300/80 text-gray-800 rounded-xl p-5 shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        className="w-16 h-16 rounded-full shadow-md  group-hover:ring-blue-400 transition"
                                        // ring-2 ring-gray-200 dark:ring-gray-600
                                        src={item.imgCompany}
                                        alt={item.company}
                                    />
                                    <div className="p-2 pr-10 bg-white/85 rounded-lg">
                                        <h3 className="text-lg md:text-2xl font-bold">{item.job}</h3>
                                        <p className="text-gray-700">{item.company}</p> {/*dark:text-gray-400 */}
                                        <span className="text-sm text-gray-700/85">{item.date}</span>
                                    </div>
                                </div>

                                {/* Tech chips */}
                                <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
                                    {item.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            // dark:bg-gray-700 dark:text-gray-300
                                            className="px-3 py-1 text-xs bg-gray-200/70  text-gray-700  rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Descripción */}
                                <p className="text-gray-600 text-justify leading-relaxed bg-white/55 rounded-lg px-5 py-2 mb-4"> {/* dark:text-gray-300 */}
                                    {item.description}
                                </p>

                                {/* Extra (Accordion) */}
                                {item.plus && (
                                    // dark:bg-gray-800
                                        item.plus.map((extra, index) => (
                                            <Accordion title={extra.top} key={index} bg_button='bg-gray-300/85'
                                            classNameChildren="flex flex-col md:flex-row justify-between items-center gap-4 bg-white"
                                            >
                                                <p 
                                                // dark:text-gray-400
                                                className="text-gray-500 text-justify">{extra.description}</p>
                                                {extra.image && (
                                                    <img
                                                        src={extra.image.img}
                                                        alt={extra.image.imgAlt}
                                                        className="w-48 rounded-lg shadow-md"
                                                    />
                                                )}
                                            </Accordion>
                                        ))
                                    
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

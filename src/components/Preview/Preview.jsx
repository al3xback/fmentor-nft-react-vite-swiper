import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import equilibriumImage from '../../assets/equilibrium.jpg';
import avatarImage from '../../assets/avatar.png';
import styles from './Preview.module.css';

export default function Preview() {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty('--progress', 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};

	return (
		<article className={styles.preview}>
			<div className={styles.image}>
				<Swiper
					modules={[Navigation, Autoplay]}
					navigation
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					onAutoplayTimeLeft={onAutoplayTimeLeft}
				>
					<SwiperSlide>
						<img
							width="302"
							height="302"
							src={equilibriumImage}
							alt="Equilibrium"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							width="302"
							height="302"
							src={equilibriumImage}
							alt="Equilibrium"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							width="302"
							height="302"
							src={equilibriumImage}
							alt="Equilibrium"
						/>
					</SwiperSlide>
					<div className="autoplay-progress" slot="container-end">
						<svg viewBox="0 0 36 36" ref={progressCircle}>
							<circle cx="18" cy="18" r="16"></circle>
						</svg>
						<span ref={progressContent}></span>
					</div>
				</Swiper>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>
					<a href="#" className="btn btn--link">
						Equilibrium #3429
					</a>
				</h2>
				<p className={styles.desc}>
					Our Equilibrium collection promotes balance and calm.
				</p>
				<ul className={styles.statuses}>
					<li>
						<i className="icon-ethereum" aria-hidden="true"></i>
						<span>0.041 ETH</span>
					</li>
					<li>
						<i className="icon-clock" aria-hidden="true"></i>
						<span>3 days left</span>
					</li>
				</ul>
				<div className={styles.author}>
					<img
						width="33"
						height="33"
						src={avatarImage}
						alt="Jules Wyvern"
					/>
					<span className={styles.text}>
						Creation of&nbsp;
						<a href="#" className="btn btn--link">
							Jules Wyvern
						</a>
					</span>
				</div>
			</div>
		</article>
	);
}

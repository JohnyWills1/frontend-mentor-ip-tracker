import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
	const [ipAddress, setIpAddress] = useState('');

	const logIP = () => {
		console.log(ipAddress);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>IP Address Tracker </title>
				<link rel='icon' href='/favicon-32x32.png' />
			</Head>

			<main className={styles.main}>
				<div className={styles.topPanel}>
					<div className={styles.title}>IP Address Tracker</div>

					<div className={styles.searchBar}>
						<input
							type='text'
							className={styles.inputBar}
							placeholder='Search for any IP address or domain'
							onChange={(e) => setIpAddress(e.target.value)}
						/>
						<button className={styles.searchButton} onClick={() => logIP()} />
					</div>

					<div className={styles.infoPanel}>
						<div className={styles.ip}>
							<div className={styles.infoTitle}>IP ADDRESS</div>
							<div className={styles.result}>{ipAddress}</div>
						</div>
						<div className={styles.location}>
							<div className={styles.infoTitle}>LOCATION</div>
							<div className={styles.result}>Cambridge...</div>
						</div>
						<div className={styles.timezone}>
							<div className={styles.infoTitle}>TIMEZONE</div>
							<div className={styles.result}>UTC -05:00</div>
						</div>
						<div className={styles.isp}>
							<div className={styles.infoTitle}>ISP</div>
							<div className={styles.result}>Sky</div>
						</div>
					</div>
				</div>
				<div className={styles.bottomPanel}></div>
			</main>
		</div>
	);
}

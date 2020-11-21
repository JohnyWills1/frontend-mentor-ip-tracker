import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';

export default function Home() {
	const [ipAddress, setIpAddress] = useState('');
	const [ip, setIp] = useState('');
	const [timezone, setTimezone] = useState('');
	const [isp, setIsp] = useState('');
	const [location, setLocation] = useState('');
	const [lat, setLat] = useState(0);
	const [lng, setLng] = useState(0);

	const DynamicMapNoSSR = dynamic(() => import('../components/Map'), {
		ssr: false,
	});

	const logIP = () => {
		console.log(ipAddress);
		axios
			.get(
				'https://cors-anywhere.herokuapp.com/https://geo.ipify.org/api/v1?apiKey=' +
					process.env.NEXT_PUBLIC_API_KEY +
					'&ipAddress=' +
					ipAddress
			)
			.then(({ data }) => {
				setIp(data.ip);
				setTimezone(data.location.timezone);
				setIsp(data.isp);
				setLocation(
					data.location.city +
						', ' +
						data.location.region +
						', ' +
						data.location.country
				);
				setLat(data.location.lat);
				setLng(data.location.lng);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>IP Address Tracker </title>
				<link rel='icon' href='/favicon-32x32.png' />
				<link
					href='https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css'
					rel='stylesheet'
				/>
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
						<div className={styles.statPanel}>
							<div className={styles.infoTitle}>IP ADDRESS</div>
							<div className={styles.result}>{ip}</div>
						</div>
						<div className={styles.divider} />
						<div className={styles.statPanel}>
							<div className={styles.infoTitle}>LOCATION</div>
							<div className={styles.result}>{location}</div>
						</div>
						<div className={styles.divider} />
						<div className={styles.statPanel}>
							<div className={styles.infoTitle}>TIMEZONE</div>
							<div className={styles.result}>{timezone}</div>
						</div>
						<div className={styles.divider} />
						<div className={styles.statPanel}>
							<div className={styles.infoTitle}>ISP</div>
							<div className={styles.result}>{isp}</div>
						</div>
					</div>
				</div>
				<div className={styles.bottomPanel}>
					<DynamicMapNoSSR lat={lat} lng={lng} />
				</div>
			</main>
		</div>
	);
}

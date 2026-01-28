import React, { forwardRef } from "react";
import QRCode from "react-qr-code";
import { FaLaptopCode, FaAward } from "react-icons/fa";

const CertificateDownloadTemplate = forwardRef(({ certificate }, ref) => {
    if (!certificate) return null;

    // Standard A4 landscape dimensions in px
    const width = 1123;
    const height = 794;

    const styles = {
        container: {
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: "#fff",
            backgroundImage: "radial-gradient(circle at 50% 50%, #fcfcfc 0%, #f1f5f9 100%)",
            position: "relative",
            fontFamily: "'Playfair Display', serif",
            color: "#1e293b",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            padding: "0",
            boxSizing: "border-box",
        },
        // Inner Clean Frame
        innerFrame: {
            position: 'absolute',
            top: '20px',
            left: '20px',
            right: '20px',
            bottom: '20px',
            border: '1px solid #cbd5e1',
            zIndex: 2,
            pointerEvents: 'none',
        },
        // Second inner border for detail
        innerFrameDetail: {
            position: 'absolute',
            top: '26px',
            left: '26px',
            right: '26px',
            bottom: '26px',
            border: '2px solid #e2e8f0',
            zIndex: 2,
            pointerEvents: 'none',
        },

        contentWrapper: {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            padding: '60px 80px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 10
        },

        // Header
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            position: 'relative',
            height: '100px',
        },
        logoSection: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginTop: '20px', // Moved down slightly to avoid corner
            marginLeft: '10px' // Moved right slightly
        },
        logoIcon: {
            fontSize: '48px',
            color: '#1e3a8a',
            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
        },
        logoTextContainer: {
            display: 'flex',
            flexDirection: 'column'
        },
        logoTitle: {
            fontSize: '26px',
            fontWeight: '900',
            color: '#0f172a',
            fontFamily: "'Montserrat', sans-serif",
            textTransform: 'uppercase',
            lineHeight: 1
        },
        logoSubtitle: {
            fontSize: '12px',
            color: '#f59e0b',
            fontWeight: '700',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginTop: '5px'
        },

        // Badge - Fixed Position
        badgeContainer: {
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '-20px'
        },
        badge: {
            background: '#1e3a8a',
            color: '#fff',
            padding: '12px 40px', // Wider
            borderRadius: '0 0 15px 15px',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 'bold',
            fontSize: '14px', // Slightly larger font
            letterSpacing: '1px',
            boxShadow: '0 4px 12px rgba(30, 58, 138, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            borderTop: '5px solid #f59e0b', // Gold strip on top to separate from border
            lineHeight: '1'
        },

        // Body
        body: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            marginTop: '-30px'
        },
        mainTitle: {
            fontSize: '90px',
            fontWeight: '900',
            color: '#1e3a8a',
            textTransform: 'uppercase',
            letterSpacing: '12px',
            fontFamily: "'Montserrat', sans-serif",
            marginBottom: '5px', // Reduced margin
            textShadow: '0 2px 2px rgba(0,0,0,0.1)'
        },

        separator: {
            width: '100px', // Slightly smaller
            height: '2px', // Thinner
            background: '#f59e0b', // Solid gold or keep gradient if preferred, let's stick to gradient but simple
            background: 'linear-gradient(90deg, transparent, #f59e0b, transparent)',
            marginTop: '15px',
            marginBottom: '30px'
        },

        studentName: {
            fontSize: '42px',
            fontWeight: 'bold',
            color: '#1e293b',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '10px',
        },

        courseText: {
            fontSize: '32px',
            color: '#1e3a8a',
            marginBottom: '0px',
            marginTop: '10px',
            fontWeight: '700',
            fontFamily: "'Montserrat', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '2px'
        },

        completionText: {
            fontSize: '20px',
            color: '#64748b',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: '400',
            maxWidth: '800px',
            lineHeight: '1.6',
            marginBottom: '30px'
        },

        // Footer
        footer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            position: 'relative',
            marginTop: 'auto',
            paddingBottom: '10px'
        },
        footerSectionLeft: {
            textAlign: 'left',
            minWidth: '200px'
        },
        footerSectionRight: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', /* Centers the label and name relative to each other */
            minWidth: '200px',
            position: 'relative',
            zIndex: 20,
            marginRight: '60px'
        },

        labelSmall: {
            fontSize: '11px',
            color: '#94a3b8',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontFamily: "'Montserrat', sans-serif",
            marginBottom: '5px'
        },
        textValue: {
            fontSize: '16px',
            fontWeight: '700',
            color: '#334155',
            fontFamily: "'Montserrat', sans-serif",
            marginBottom: '15px'
        },

        footerCenter: {
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },

        qrWrapper: {
            background: '#fff',
            padding: '10px',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            border: '1px solid #f1f5f9'
        },

        directorName: {
            fontSize: '26px',
            fontWeight: 'bold',
            color: '#0f172a', /* Dark slate for better contrast */
            fontFamily: "'Playfair Display', serif",
            borderTop: '2px solid #f59e0b', /* Gold line */
            paddingTop: '15px',
            marginTop: '50px', /* Space for signature */
            display: 'inline-block',
            minWidth: '220px',
            textAlign: 'center'
        }
    };

    const qrData = `O'quvchi: ${certificate.studentName}\nKurs: ${certificate.courseName}\nID: ${certificate.qrLabel}\nSana: ${certificate.date}\nBerildi: Narpay IT Academy\nLink: ${window.location.origin}/certificates`;

    return (
        <div ref={ref} style={styles.container} id="certificate-template">
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        `}
            </style>

            {/* Background Pattern - Subtle Guilloche-ish dot pattern */}
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, opacity: 0.03 }}>
                <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#000" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dotPattern)" />
            </svg>

            {/* Shapes - Significantly reduced size to avoid overlap */}
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
                <defs>
                    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e3a8a" />
                        <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d97706" />
                        <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                </defs>

                {/* Top Left - Smaller */}
                <path d="M0 0 L150 0 L0 150 Z" fill="url(#blueGrad)" />
                <path d="M0 150 L30 150 L150 30 L150 0 Z" fill="url(#goldGrad)" opacity="0.9" />

                {/* Bottom Right - Smaller */}
                <g transform={`translate(${width}, ${height}) rotate(180)`}>
                    <path d="M0 0 L150 0 L0 150 Z" fill="url(#blueGrad)" />
                    <path d="M0 150 L30 150 L150 30 L150 0 Z" fill="url(#goldGrad)" opacity="0.9" />
                </g>
            </svg>

            <div style={styles.innerFrame}></div>
            <div style={styles.innerFrameDetail}></div>

            <div style={styles.contentWrapper}>
                <div style={styles.header}>
                    <div style={styles.logoSection}>
                        <FaLaptopCode style={styles.logoIcon} />
                        <div style={styles.logoTextContainer}>
                            <span style={styles.logoTitle}>Narpay IT</span>
                            <span style={styles.logoSubtitle}>Akademiya</span>
                        </div>
                    </div>

                    <div style={styles.badgeContainer}>
                        <div style={styles.badge}>
                            <FaAward style={{ color: '#fbbf24', fontSize: '18px', transform: 'translateY(2px)' }} />
                            <span style={{ position: 'relative', top: '-1px', lineHeight: '1' }}>BITIRUV SERTIFIKATI</span>
                        </div>
                    </div>

                    {/* Empty right div to balance flex */}
                </div>

                <div style={styles.body}>
                    <h1 style={styles.mainTitle}>SERTIFIKAT</h1>

                    <div style={styles.courseText}>&ldquo;{certificate.courseName}&rdquo;</div>

                    <div style={styles.separator}></div>

                    <div style={styles.studentName}>{certificate.studentName}</div>

                    <div style={styles.completionText}>
                        Narpay IT Academy tomonidan tashkil etilgan o'quv kursini muvaffaqiyatli tamomlagani va malaka oshirgani uchun taqdim etildi.
                    </div>
                </div>

                <div style={styles.footer}>
                    <div style={styles.footerSectionLeft}>
                        <div style={styles.labelSmall}>ID Raqam</div>
                        <div style={styles.textValue}>{certificate.qrLabel || '2026001'}</div>

                        <div style={styles.labelSmall}>Sana</div>
                        <div style={styles.textValue}>{certificate.date}</div>
                    </div>

                    <div style={styles.footerCenter}>

                        <div style={styles.qrWrapper}>
                            <QRCode value={qrData} size={95} />
                        </div>
                    </div>

                    <div style={styles.footerSectionRight}>
                        <div style={styles.labelSmall}>O'quv markazi direktori</div>
                        <div style={styles.directorName}>H.SH.Zulfiqorov</div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CertificateDownloadTemplate;

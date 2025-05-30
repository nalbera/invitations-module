import qrCode from 'qrcode';

const generateQrUtils = async ({fullName, entrydate, entryTime, expirationDate}) => {
    
    const infoInvit = {
        fullName,
        entrydate,
        entryTime,
        expirationDate
    };

    const qr = await qrCode.toDataURL(JSON.stringify(infoInvit));
    
    return qr;

}

export default generateQrUtils;
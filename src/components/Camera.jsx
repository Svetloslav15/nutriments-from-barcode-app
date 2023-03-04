import { useEffect } from 'react'
import styled from 'styled-components'
import Quagga from 'quagga'

const Container = styled.div`
    border-radius: 15%;
    width: 400px;
    height: 300px;
    margin: 0 auto;
    margin: 0px auto;
    background: red;
    video {
        border-radius: 15px;
        width: 400px;
        height: 300px;
    }
`

const Camera = ({ setBarcode }) => {
    useEffect(() => {
        Quagga.init({
            inputStream: {
                name: 'Live',
                type: 'LiveStream',
                target: document.querySelector('#barcode-camera'),
                constraints: {
                    facingMode: 'environment'
                }
            },
            decoder: {
                readers: ['ean_reader']
            }
        }, function (err) {
            if (err) {
                console.error(err);
                return;
            }
            Quagga.start();
            return () => {
                Quagga.stop();
            };
        });

        Quagga.onDetected(function (result) {
            if (result.codeResult.code) {
                setBarcode(result.codeResult.code);
            }
        });
    }, []);

    return (
        <Container id="barcode-camera" />
    )
}

export default Camera
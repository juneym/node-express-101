import EventEmitter from 'events';
import { V4MAPPED } from 'dns';

const evm = new EventEmitter();


evm.on('change', () => {
    console.log('Something has changed...')
});

evm.emit('change');
evm.emit('change');
evm.emit('change');
evm.emit('change');
evm.emit('change');


setInterval(() => {
    evm.emit('change');
}, 1000);



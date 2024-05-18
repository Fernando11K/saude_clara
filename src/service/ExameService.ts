import { exameRef, onValue, push } from 'src/boot/firebase';
import { Exame } from 'src/components/models';
const salvarExame = (exame: Exame) => {

    return push(exameRef, { exame })
}
const buscarExames = async () => {
    return new Promise<Array<Exame>>((resolve, reject) => {
        const listaExames: Array<Exame> = []
        onValue(exameRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childData = childSnapshot.val();
                console.log(childData)
                listaExames.push(childData);

            });
            resolve(listaExames);
        }, (error) => {
            reject(error);
        },
            {
                //    onlyOnce: false
            });
    }
    );
}

export { salvarExame, buscarExames }
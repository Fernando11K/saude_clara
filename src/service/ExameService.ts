import { exameByIdRef, exameRef, onValue, push } from 'src/boot/firebase';
import { Exame } from 'src/model/models';
const salvarExame = (exame: Exame) => {

    return push(exameRef, { exame })
}
const buscarExames = async () => {
    return new Promise<Array<Exame>>((resolve, reject) => {
        const listaExames: Array<Exame> = []
        onValue(exameRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                listaExames.push({ chave: childKey, ...childData });

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

const buscarExamePorId = async (id: string) => {
    return new Promise<Exame | null>((resolve, reject) => {
        onValue(exameByIdRef(id), (snapshot) => {
            resolve(snapshot.val());
        }, (error) => {
            reject(error);
        });
    });
}

export { salvarExame, buscarExames, buscarExamePorId }
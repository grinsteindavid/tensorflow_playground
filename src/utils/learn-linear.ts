import { layers, sequential, tensor2d } from '@tensorflow/tfjs-node';

export const learnLinear = async (input: number[]) => {
    const model = sequential();

    model.add(layers.dense({ units: 1, inputShape: [1] }));
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

    const xs = tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
    const ys = tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

    await model.fit(xs, ys, { epochs: 250 });

    return model.predict(tensor2d(input, [1, 1]));
};

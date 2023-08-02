import { sendForTest } from '../../../../../test/helpers/e2e.helper';

describe('MemResolver', () => {
  it('mems', async () => {
    const graphQLResponse = await sendForTest({
      query: '{ mems(GetMemsInput: {take: 1}) { id likes rating }}',
    });

    expect(graphQLResponse.errors).toBeUndefined();
    expect(graphQLResponse.data).toBeDefined();
  });
});

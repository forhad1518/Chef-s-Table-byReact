import TRecipes from "./all -Recipes/TRecipes";
import ITable from "./Order-Items/ITable";

const Items = () => {
    return (
        <div className='flex flex-wrap gap-3 md:grid md:grid-cols-10'>
            <div className="md:col-span-6">
                <TRecipes></TRecipes>
            </div>
            <div className="md:col-span-4 border-2 p-4 rounded-xl">
                <ITable></ITable>
            </div>
        </div>
    );
};

export default Items;
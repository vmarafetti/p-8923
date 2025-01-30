import { SignUpForm } from "@/components/auth/SignUpForm";

const Index = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <SignUpForm />
      </div>

      {/* Right side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-muted items-center justify-center relative">
        <div className="absolute inset-0 flex flex-col justify-center p-12 bg-gradient-to-b from-transparent to-background/90">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            84% of technologists increase their salary with Andela.
          </h2>
          <p className="text-xl text-muted-foreground">
            Brilliance beyond borders: Andela connects you to anytime, anywhere roles at the world's best organizations.
          </p>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/163c9fabc218492f806d253687ec79d9/f9139bae843daa11daeec1edf3b119e78c93234bf7da9ec9e47c1bca46c87abc?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/163c9fabc218492f806d253687ec79d9/f9139bae843daa11daeec1edf3b119e78c93234bf7da9ec9e47c1bca46c87abc?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/163c9fabc218492f806d253687ec79d9/f9139bae843daa11daeec1edf3b119e78c93234bf7da9ec9e47c1bca46c87abc?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/163c9fabc218492f806d253687ec79d9/f9139bae843daa11daeec1edf3b119e78c93234bf7da9ec9e47c1bca46c87abc?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/163c9fabc218492f806d253687ec79d9/f9139bae843daa11daeec1edf3b119e78c93234bf7da9ec9e47c1bca46c87abc?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/163c9fabc218492f806d253687ec79d9/f9139bae843daa11daeec1edf3b119e78c93234bf7da9ec9e47c1bca46c87abc?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/163c9fabc218492f806d253687ec79d9/f9139bae843daa11daeec1edf3b119e78c93234bf7da9ec9e47c1bca46c87abc?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/163c9fabc218492f806d253687ec79d9/f9139bae843daa11daeec1edf3b119e78c93234bf7da9ec9e47c1bca46c87abc?placeholderIfAbsent=true"
          alt="Andela Hero"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Index;